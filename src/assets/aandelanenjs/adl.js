/* eslint-disable prettier/prettier */
(function(){
	
	
	//var ho = HOYT.wwzr.core.HouseOption;
	//var f = ho.formatProperty;
	//ho.formatProperty = function(prop, val){
	//	if(prop == 'housetypeid')return val.replace(/\d+/g, '');
	//	val = f(prop, val);
	//	return val;
	//}

	var pf = HOYT.wwzr.core.HouseOption.propertyFormats;
	pf.balcony = pf.livingsurface;


	//var nav, mrg, usr, dat, lib, fpv, lst;
	var nav = HOYT.wwzr.ui.Navigation;
	var dat = HOYT.wwzr.data.DataModel;
	var usr = HOYT.wwzr.data.UserData;
	var lib = HOYT.wwzr.ui.HouseOptionLibrary;
	var fpv = HOYT.wwzr.ui.FloorplanView;
	var mrg = HOYT.wwzr.data.DataManager;
	var lst = HOYT.wwzr.ui.HouseOptionList;
	var currentHousetypeId;
	var currentHouseId;
	//var isResetting = false;
	//var userdata = {};//store old values
	var houseoptions, hiddenpages = [], lightbox;
	HOYT.wwzr.ui.Navigation.settings.selectSubpage = false;

	$.extend(HOYT.wwzr.pages.BasePage.prototype, {
		parentPage : undefined,
		getPagePropery : function(page, prop){
			if(page[prop] == undefined){
				if(this.parentPage == undefined){
					var $e = $('#wwzr-navmenu li[data-id="'+this.pageId+'"]').parent().closest('li');
					if($e.length)this.parentPage = dat.getPageById($e.data('id'));
					else this.parentPage = {};
				}
				return this.parentPage[prop];
			}
			return page[prop];
		},
		init : function(){	
			var page = dat.getPageById(this.pageId);
			if(page.header){
				var self = this;
				//$.each(['payoff', 'rightcol', 'leftcol'], function(index, value) {
				$.each(['rightcol'], function(index, value) {
				  	page[value] = self.getPagePropery(page, value);
				});
				if(page.page){
					var pages = page.page;
					var i = pages.length;
					while(i--){
						if($.inArray(pages[i].id, hiddenpages) >=0){
							page.page.splice(i, 1);
						}
						//pages[i].show = $.inArray(pages[i].id, hiddenpages)==-1;
					}
				}
				//show thumb grid of subpages
				this.setContent($('#wwzr-page-tmpl').tmpl(page));

			}
		}
	});


	function lightboxHandler(event){
		var $e = $(event.currentTarget);
		switch(event.data.type){
			case 'image':
				lightbox.setCaption($e.attr('title'));
				//lightbox.setCaption($e.attr('title') + '<br><i>impressie kan afwijken van plattegrond</i>');
				lightbox.setImage($e.attr('href'));
				break;
			case 'info':
				lightbox.setTitle($e.siblings('.wwzr-libraryitem-label').html());
				lightbox.setContent($('.wwzr-libraryitem-info', $e).html());
				break;
		}
		
		return false;
	}

	// function expandHouseInfo(expand){
	// 	var $e = $('#wwzr-houseinfo');
	// 	if(expand !== false){
	// 		if(!$e.hasClass('down')){
	// 			// $('.hideEl' , $e).slideDown(300);
	// 			$e.addClass('down');
	// 		}
	// 	}else{
	// 		// $('.hideEl' , $e).slideUp();
	// 		$e.removeClass('down');
	// 	}
	// }

	function hidePages(pages, parent){//hide page if housetype has no options in this category
		if(pages && pages.length){
			var i = pages.length;
			var count = 0;
			while(i--){
				if(pages[i].floorplanid){
					if($('#wwzr-floorplanview li[data-id="'+pages[i].floorplanid+'"].empty').length>0){
						nav.showMenuItemById(pages[i].id, false);
						hiddenpages.push(pages[i].id);
						count++;
					}
				}else if(pages[i].header && pages[i].page == undefined){
					if(houseoptions == undefined){
						houseoptions = dat.getHouseOptionsByHouseTypeId(_.houseType());
					}
					var j = houseoptions.length;
					while(j--){
						var fid = houseoptions[j].floorplanid;
						if(!$.isArray(fid)) fid = [fid];
						if($.inArray(pages[i].id, fid)>=0) break;
					}
					if(j == -1){
						nav.showMenuItemById(pages[i].id, false);
						hiddenpages.push(pages[i].id);
						count++;
					}
				}
				hidePages(pages[i].page, pages[i]);
			}
			if(parent && pages.length == count){//hide parent if all subpages are hidden
				nav.showMenuItemById(parent.id, false);
				hiddenpages.push(parent.id);
			}
		}
	}

	function navHandler(ev){
		hiddenpages = [];
		hidePages(dat.getData('page'));
		houseoptions = undefined;

	}

	function pageHandler(){
		var pageId = nav.getCurrentPageId();

		$('#wwzr').attr('data-path', $('#wwzr-navmenu li[data-id="'+pageId+'"]').parents('li').andSelf().map(function() {
			$('#wwzr').removeClass('navopen');
			return this.dataset.id; 
		}).get().join('/'));

			
		if($('#wwzr-floorplanview').is(':visible')){
			lib.show();
			lib.showLibraryByFloorplanId(fpv.getSelectedFloorplanId());
		}else if($('#wwzr-houseoption-libraries .wwzr-lib'+pageId).length){
			lib.show();
			lib.showLibraryByFloorplanId(pageId);
		}else{
			lib.hide();
		}

		//showEmptyHouseOptionLibrary();
		
		//$('#wwzr-houseinfo-button').off('click').click(function(){
		//	expandHouseInfo(true);
		//});
		

		//switch(pageId){
		//	case 'download':
		//		expandHouseInfo(true);
		//		fpv.setTabIndex(-1);
		//		break;
		//}
	
		$('#wwzr').removeClass('showhouseoptions');
		
		resize();
	}
	function resize(){
		var f = fpv.getSelectedFloorplan();	
		if(f){
			if(f.$element.is(':visible')){
				f.$element.width('100%');
				var height = Math.round(f.$element.width() * f.height / f.width);
				f.$element.height(height);
			}
		}
	}
	// function setBasePrice(){
	// 	var h = dat.getHouseById(_.houseId());
	// 	HOYT.wwzr.ui.HouseInfo.setProperty('baseprice', String($.isEmptyObject(h.price)?'':h.price).formatCurrency(), false);
	// }
	function userDataHandler(event, name, value){
		
		//if(!isResetting)userdata[name] = value;

		if(name == HOYT.wwzr.core.House.ID){
			var $nav = $('#wwzr-navmenu');
			if(value){
				//setBasePrice();
				$nav.removeClass('disabled');
			}else $nav.addClass('disabled');
			

			//if(!fpv.selectFirstFloorplan())floorplanViewHandler();


			//if(value == '003' || value == '004' || value == '005' || value == '006'){
			//	fpv.disableTab(4, true);
			//	nav.disableMenuItemById('tweedeverdieping', true);
			//}

			if(currentHouseId) $('#wwzr').removeClass('houseid-'+currentHouseId);
			currentHouseId = _.houseId();
			if(currentHouseId)$('#wwzr').addClass('houseid-'+currentHouseId);
		}
		if(name == HOYT.wwzr.core.House.TYPE){
			if(currentHousetypeId) $('#wwzr').removeClass('housetypeid-'+currentHousetypeId);
			currentHousetypeId = _.houseType();
			if(currentHousetypeId)$('#wwzr').addClass('housetypeid-'+currentHousetypeId);
		}
	

	}
	function userDataHandlerDelayed(){
		$('.wwzr-houseoption-library-section').each(function(){
			var $e = $(this);
			if($e.find('.wwzr-libraryitem:not(.locked)').length) $e.show();
			else $e.hide();
		});
	}

	/*
	function showEmptyHouseOptionLibrary(){
		
		var $e = $('#wwzr-houseoption-libraries');
		$('#wwzr-houseoption-libraries-empty')[$e.is(':visible') && $('.wwzr-houseoption-library:visible', $e).length ==0 ? 'show' : 'hide']();
		var idx = fpv.getTabIndex();
		var $e = $('.wwzr-houseoption-library-continue');
		$e.hide();
		if(idx > -1){
			var a = dat.getData('floorplan');
			if(a[idx+1]){	
				if($('#wwzr-floorplanview .wwzr-tabbutton.empty[data-id="'+a[idx+1].id+'"]').length==0){
					$e.show();
					$('#wwzr-houseoption-libraries-empty .wwzr-floorplan-text').html(a[idx+1].label.toLowerCase().replace(' ', '&nbsp;'));
				}
			}
		}
	}*/
/*
	function floorplanViewHandler(){
		var f = fpv.getSelectedFloorplan();
		if(f){
			$('.wwzr-showhouseoptions span').text(dat.getDataById('floorplan', f.id).label);

			var p = dat.getPageById('woningopties');
			var pages = p.page;
			var i = pages.length;
			while(i--){
				if(pages[i].floorplanid === f.id){
					nav.gotoPageById(pages[i].id);
					break;
				}
			}
			
			if(!f.isLoaded){
				var e = HOYT.wwzr.ui.Floorplan.events.LOAD + '.resize';
				$(f).off(e).on(e, function(evt){
					$('canvas', evt.currentTarget.$element).width('100%');
					resize();
				});
			}
		}
		resize();

		showEmptyHouseOptionLibrary();
	}*/
	/*
	function setLibraryItemExtra(event){
		var $e = $(event.currentTarget);
		var val = $e.data('value');
		var oid = $e.data('name');
		var $lib = $e.closest('.wwzr-houseoption-library');
		var $extra = $('.wwzr-libraryitem-extra', $lib);
		if($extra.length){
		
			if(usr.getData(oid) == val){
				
				var ho = dat.getHouseOptionById(_.houseType(), oid);
				var input = ho.input[val-1];
				var o = HOYT.wwzr.core.HouseOption;
				var _val = o.getPropertyValue;
				var _for = o.formatProperty;
				for(var p in input){
					var data = _val(input[p], p);
					switch(p){
						case 'media':
							$('.wwzr-libraryitem-extra-'+p, $extra).css('background-image', 'url("'+HOYT.wwzr.settings.mediaDir + data+'")');
							break;
						default:
							$('.wwzr-libraryitem-extra-'+p, $extra).html(o.formatProperty(p, data));
					}
				}
				$extra.slideDown();
			}else{
				$extra.slideUp();
				//$extra.hide();
				//$('div[class^="wwzr-libraryitem-extra-"]', $extra).empty();
			}
		}
	}
*/
	$(HOYT.wwzr).on(HOYT.wwzr.events.INIT, function(){

		// nav = HOYT.wwzr.ui.Navigation;
		// dat = HOYT.wwzr.data.DataModel;
		// usr = HOYT.wwzr.data.UserData;
		// lib = HOYT.wwzr.ui.HouseOptionLibrary;
		// fpv = HOYT.wwzr.ui.FloorplanView;
		// mrg = HOYT.wwzr.data.DataManager;
		// lst = HOYT.wwzr.ui.HouseOptionList;

		
		lightbox = new HOYT.aandelanen.widgets.LightBox($('#wwzr-lightbox'));

		lib.conditionalProperties = ['label','price','image','data','media'/*,'code'*/];
		lib.init();

		$(lib).on(lib.events.RESET, function(){
			$('a.wwzr-lightbox').off('click.lightbox').on('click.lightbox', {type:'image'}, lightboxHandler);
			//$('a.wwzr-libraryitem-infobutton').off('click.lightbox').on('click.lightbox', {type:'info'}, lightboxHandler);

			//$('.wwzr-libraryitem[data-name="keukenuitvoering"]').click(setLibraryItemExtra);
		})


		lst.maintainHouseOptionOrder = true;
		$(lst).on(lst.events.DELETE_ITEM + ' ' +lst.events.ADD_ITEM, function(){
			var cat = "Afbouwopties";
			var $e = $('#wwzr-houseoption-list #wwzr-list-category');
			if($e.length == 0) $e = $('<li id="wwzr-list-category">'+cat+'</li>');
			var $t = $('#wwzr-houseoption-list .wwzr-listitem[data-category="'+cat+'"]');
			if($t.length)$t.first().before($e);
			else $e.remove();
		});

		lst.init();

		
		// $('#wwzr-houseinfo').click(function(){
		// 	expandHouseInfo(!$('#wwzr-houseinfo').hasClass('down'));
		// });
		

		//$('#wwzr .wwzr-showhouseoptions').click(function(){
		//	$('#wwzr').toggleClass('showhouseoptions');
		//	$('#wwzr').removeClass('navopen');
		//});
	
		
		$('#wwzr-togglenav').click(function(){
			$('#wwzr').toggleClass('navopen');
			$('#wwzr').removeClass('showhouseoptions');
		});

		$(nav).change(pageHandler);

		$(nav).on(nav.events.RESET, navHandler);
		

		//$(fpv).on(fpv.events.TABINDEX_CHANGE, floorplanViewHandler);
		
		$(usr).change(userDataHandler).on(usr.events.DELAYED_CHANGE , userDataHandlerDelayed);

		//fpv.cacheImages = false;

		mrg.useOriginalValues = false;

		//$(mrg).on(mrg.events.GET_DOCUMENT,  function(ev, success){
		//	if(success === true) nav.gotoPageByIndex(0);
		//});

		window.addEventListener('resize', resize, false);


		//if(_.houseId() == undefined && HOYT.wwzr.settings.houseId != undefined){
		//	_.houseId(HOYT.wwzr.settings.houseId);
		//}

//HOYT.wwzr.getCurrentPage().init();//re-init page to remove hidden pages

		//navHandler();
		pageHandler();
	});
}());