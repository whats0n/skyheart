head.ready(function() {
	//select
		$(document).click(function() {
				$(".js-select").removeClass("is-active");
			 $(".js-select-list").slideUp(100);
		});

	// select list
		$("body").on("click",".js-select",function(event) {
				event.stopPropagation();
		});
		$("body").on("click",".js-select-text",function(event) {
			var select = $(this).parents(".js-select");
				if (select.hasClass("is-active")) {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").slideUp(100);
				}
				else {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").slideUp(100);
						select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
				}

		});

		$("body").on("click",".js-select-list li",function() {
				var val = $(this).attr("data-val");
				var text = $(this).text();
				var select = $(this).parents(".js-select");
				var selectList = $(this).parents(".js-select-list");
				select.find(".js-select-text").text(text);
				select.find("option").removeAttr("selected");
				select.find('option[value="'+val+'"]').attr("selected", "selected");
				selectList.find("li").removeClass("is-active");
				$(this).addClass("is-active");
				select.removeClass("is-active");
				selectList.slideUp(100);
				return false;

		});
		$('.js-select-li').on('click', function() {
				$(this).parents('.js-select').find('.js-select-text').text($(this).text());
				$(this).parents(".js-select").removeClass("is-active");
				$(this).parents(".js-select-list").slideUp(100);
				return false;
		});

		//nav
		$('.js-nav-btn').on('click', function() {
			$('.js-nav').toggleClass('is-active');
			return false;
		});
		$('body').on('click', function() {
			$('.js-nav').removeClass('is-acitve');
		});
		$('.js-nav').on('click', function(event) {
			event.stopPropagation();
		});

		//accordion
		$('.js-accordion-open').on('click', function() {
			 if ($(this).parents('.js-accordion').hasClass('is-active')) {
						$(this).parents('.js-accordion').removeClass('is-active');
						$(this).parents('.js-accordion').find('.js-accordion-block').slideUp('fast');
			 }
			 else {
						$('.js-accordion').removeClass('is-active');
						$('.js-accordion-block').slideUp('fast');
						$(this).parents('.js-accordion').addClass('is-active');
						$(this).parents('.js-accordion').find('.js-accordion-block').slideDown('fast');
			 };
			 return false;
		});

		//btn up
		$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if ($('.js-scroll-top').length>0) {
						if (scroll >= $('.js-scroll-top').offset().top) {
								$(".js-btn-up").addClass("is-active");
						} else {
								$(".js-btn-up").removeClass("is-active");
						};
				};
		});
		$(window).load(function() {
				var scroll = $(window).scrollTop();
				if ($('.js-scroll-top').length>0) {
						if (scroll >= $('.js-scroll-top').offset().top) {
								$(".js-btn-up").addClass("is-active");
						} else {
								$(".js-btn-up").removeClass("is-active");
						};
				};
		});
		$('.js-btn-up').click(function(event) {
				 $("html, body").animate({ scrollTop: 0 }, 1000);
						return false;
		});

		//enter
		$('.enter').each(function() {
				$('.js-enter-btn').on('click', function () {
						$('.js-enter-popup').toggleClass('is-active');
						return false;
				});
				$('body').on('click', function() {
						$('.js-enter-popup').removeClass('is-active');
				});
				$('.js-enter-popup').on('click', function(event) {
						event.stopPropagation();
				});
		});
		//report
		$('.js-report').on('click', function () {
				$('.js-report-box').addClass('is-active');
				return false;
		});
		$('.js-report-box').each(function() {
				$('body').on('click', function() {
						$('.js-report-box').removeClass('is-active');
				});
				$('.js-report-box').on('click', function(event) {
						event.stopPropagation();
				});
				$('.js-report-close').on('click', function() {
						$('.js-report-box').removeClass('is-active');
				});
		});
		//cabinet
		$('.profile').each(function() {
				$('.js-cabinet-btn').on('click', function () {
						$('.js-cabinet-popup').toggleClass('is-active');
						return false;
				});
				$('body').on('click', function() {
						$('.js-cabinet-popup').removeClass('is-active');
				});
				$('.js-cabinet-popup').on('click', function(event) {
						event.stopPropagation();
				});
		});
		$('.js-beta-close').on('click', function() {
				$('.js-beta').addClass('is-hidden');
				$('.p-feedback-btn').addClass('is-active');
				return false;
		});
		$('.js-adblock-close').on('click', function() {
				$('.js-adblock').addClass('is-hidden');
				return false;
		});

		$('.js-feedback-btn').on('click', function() {
				$('.js-feedback').addClass('is-active');
				$('.p-feedback-btn').removeClass('is-active');
				return false;
		});
		$('.js-feedback-close').on('click', function() {

				$('.js-feedback').removeClass('is-active');
				$('.p-feedback-btn').addClass('is-active');
		});
		//header

		//nav scroll
		$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if ($('.js-scroll-top').length>0) {
						if (scroll > $('.js-scroll-top').offset().top) {
								$("body").addClass("is-transition");
						} else {
								$("body").removeClass("is-transition");
						};
				};
		});
		$(window).load(function() {
				var scroll = $(window).scrollTop();
				if ($('.js-scroll-top').length>0) {
						if (scroll > $('.js-scroll-top').offset().top) {
								$("body").addClass("is-transition");
						} else {
								$("body").removeClass("is-transition");
						};
				};
		});
		$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if ($('.js-search').length>0) {
						if (scroll >= $('.js-search').offset().top) {
								$("body").addClass("is-fixed");
						} else {
								$("body").removeClass("is-fixed");
						};
				};
		});
		$(window).load(function() {
				var scroll = $(window).scrollTop();
				if ($('.js-search').length>0) {
						if (scroll >= $('.js-search').offset().top) {
								$("body").addClass("is-fixed");
						} else {
								$("body").removeClass("is-fixed");
						};
				};
		});
		//index menu
		$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if ($('.index__menu').length>0) {
						if (scroll >= $('.index__menu-in').offset().top) {
								$(".index__menu").addClass("is-active");
						} else {
								$(".index__menu").removeClass("is-active");
						};
				};
		});
		$(window).load(function() {
				var scroll = $(window).scrollTop();
				if ($('.index__menu').length>0) {
						if (scroll >= $('.index__menu-in').offset().top) {
								$(".index__menu").addClass("is-active");
						} else {
								$(".index__menu").removeClass("is-active");
						};
				};
		});

		//theme
		$('.js-theme-btn').on('click', function() {
				$('.js-theme-block').toggleClass('is-active');
				return false;
		});
		$('.js-theme').each(function() {
				$('body').on('click', function () {
						$('.js-theme-block').removeClass('is-active');
				});
				$(this).on('click', function (event) {
						event.stopPropagation();
				});
		});

		//slider
		$('.js-slider-close').on('click', function() {
				$('.js-slider').addClass('is-hidden');
				return false;
		});
		//add phone
		$('.js-add-link').on('click', function() {
				$(this).parents('.js-add').addClass('is-active');
				return false;
		});
		$('.js-add-delete').on('click', function() {
				$(this).parents('.js-add').removeClass('is-active');
				return false;
		});
		$('.js-contact-link').on('click', function() {
				$(this).parents('.js-contact').addClass('is-active');
				return false;
		});
		$('.js-write-link').on('click', function() {
				$('.js-write').addClass('is-active');
				$(this).parents('.js-write-parent').addClass('is-active');
				$(this).addClass('is-active');
				return false;
		});

		//action
		$('.js-action-btn').on('click', function() {
				$('.js-action-box').toggleClass('is-active');
		});
		$('.js-action').each(function() {
				$('body').on('click', function() {
						$('.js-action-box').removeClass('is-active');
				});
				$(this).on('click', function(event) {
						event.stopPropagation();
				});
				$('.js-action-box a').on('click', function() {
						$('.js-action-box a').removeClass('is-active');
						$(this).addClass('is-active');
						$('.js-action-box').removeClass('is-active');
						return false;
				});
		});

		//o-messages
		$('.o-message').each(function() {
				$('.o-message input').change(function() {
						if ($(this).is(':checked')) {
								$(this).parents('.o-message').addClass('is-chosen');
						}
						else {
								$(this).parents('.o-message').removeClass('is-chosen');
						}
				});
		});

		//smiles
		$('.js-smile-btn').on('click', function() {
				$('.js-smile').toggleClass('is-active');
				return false;
		});
		$('.js-smile').each(function() {
				$('body').on('click', function() {
						$('.js-smile').removeClass('is-active');
				});
				$(this).on('click', function(event) {
						event.stopPropagation();
				});
				$('.js-smile a').on('click', function() {
						$('.js-smile').removeClass('is-active');
						return false;
				});
		});
		$('.o-post').on('click', function() {
				$(this).toggleClass('is-active');
				if ($('.o-post').hasClass('is-active')) {
						$('.o-posts-action').addClass('is-active');
				}
				else {
						$('.o-posts-action').removeClass('is-active');
				};
		});

		//ads
		$('.n-item__img').on('click', function() {
				if ($(this).find('.n-item__popup').hasClass('is-active')) {
						$(this).find('.n-item__popup').removeClass('is-active');
				}
				else {
						$('.n-item__popup').removeClass('is-active');
						$(this).find('.n-item__popup').addClass('is-active');
				}
		});

		$('.js-cat-btn').on('click', function() {
				$(this).parents('.js-cat').find('.js-cat-list').slideToggle('600');
				$(this).toggleClass('is-active');
				return false;
		});

		$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Января','Февраля','Марта','Апреля','Мая','Июня',
		'Июля','Августа','Сентября','Октября','Ноября','Декабря'],
		monthNamesShort: ['Января','Февраля','Марта','Апреля','Мая','Июня',
		'Июля','Августа','Сентября','Октября','Ноября','Декабря'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);

		$('.js-datepick').datepicker({
				changeYear: true,
				changeMonth: true,
				dateFormat: "dd.mm.yy"
		});

		//work
		$('.js-work-input').on('change', function() {
				if ($(this).is(':checked')) {
						$(this).parents('.js-work').addClass('is-hidden');
				}
				else {
						$(this).parents('.js-work').removeClass('is-hidden');
				}
		});

		//gallery
		$('.slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: true,
				asNavFor: '.slider-nav',
				onAfterChange: function(){
					var curIndex = $('.slider-for').slickCurrentSlide();
					$('.slider-nav').find('.slick-slide').removeClass('current');
					$('.slider-nav').find('.slick-slide[index='+curIndex+']').addClass('current');
				}
		});
		$('.slider-nav').slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				infinite: false,
				asNavFor: '.js-gallery-for',
				focusOnSelect: true,
				responsive: [
						{
								breakpoint: 700,
								settings: {
										slidesToShow: 3,
										slidesToScroll: 1,
								}
						}
				],
				onInit: function(){
						$('.slider-nav').find('.slick-slide[index="0"]').addClass('current');
				}
		});

		$('.slider-nav .slick-slide').on('click', function(){
			var index = $(this).attr('index');
			$('.slider-nav').find('.slick-slide').removeClass('current');
			$(this).addClass('current');
			$('.slider-for').slickGoTo(index);
		})

		$('.slick-prev').on('click', function() {
				$('.slider-for .slick-prev').trigger('click');
		});
		$('.slick-next').on('click', function() {
				$('.slider-for .slick-next').trigger('click');
		});
		//popup gallery
		$('.js-gallery-btn').on('click', function() {
				$('.js-gallery').addClass('is-active');
				return false;
		});
		$('.js-gallery-close').on('click', function() {
				$('.js-gallery').removeClass('is-active');
				return false;
		});
		$('.js-gallery').each(function() {
				$('body').on('click', function() {
						$('.js-gallery').removeClass('is-active');
				});
				$('.p-gallery__inner').on('click', function(event) {
						event.stopPropagation();
				});
		});
		//popup resume
		$('.js-popup-btn').on('click', function() {
				$('.js-popup').addClass('is-active');
				return false;
		});
		$('.js-popup-close').on('click', function() {
				$('.js-popup').removeClass('is-active');
				return false;
		});
		$('.js-popup').each(function() {
				$('body').on('click', function() {
						$('.js-popup').removeClass('is-active');
				});
				$('.r-form').on('click', function(event) {
						event.stopPropagation();
				});
		});
		//radio
		$('.js-radio-block').each(function() {
				$('.js-radio').change(function() {
						if ($('.js-person-radio').is(':checked')) {
								$('.js-person-box').addClass('is-active');
						}
						else {
								$('.js-person-box').removeClass('is-active');
						};
						if ($('.js-company-radio').is(':checked')) {
								$('.js-company-box').addClass('is-active');
						}
						else {
								$('.js-company-box').removeClass('is-active');
						};
				});
		});
		//comp resume
		$('.js-comp-open').on('click', function() {
				$('.js-comp').addClass('is-active');
				return false;
		});
		$('.js-comp-close').on('click', function() {
				$('.js-comp').removeClass('is-active');
				return false;
		});
		$('.js-comp').each(function() {
				$('body').on('click', function() {
						$('.js-comp').removeClass('is-active');
				});
				$('.comp-popup__inner').on('click', function(event) {
						event.stopPropagation();
				});
		});

		$(window).load(function(){
				$(".js-scroll").mCustomScrollbar({
						axis:"y"
				});
		});

		$('.js-tooltip-link').mouseenter(function() {
				tooltip = $(this).offset();
				tooltipblock = $('.js-tooltip-block').offset();
				tooltipbox = $('.js-tooltip-box');
				// tooltipbox.css('top', tooltip.top - tooltipblock.top - tooltipbox.outerHeight());
				var text = $(this).attr('data-title');
				tooltipbox.find('p').html(text);
				$('.js-tooltip-box').addClass('is-active');
				tooltipbox.offset({top: tooltip.top - tooltipbox.outerHeight() - 12, left: tooltip.left - tooltipbox.outerWidth() + 26});
		});
		$('.js-tooltip-link').mouseleave(function() {
				$('.js-tooltip-box').removeClass('is-active');
		});

		$('.js-rooms-btn').on('click', function() {
				$('.js-rooms').slideToggle('fast');
				return false;
		});

		$('.js-resume-refresh-btn').on('click', function() {
				$('.js-resume-refresh').addClass('is-active');
				$('.resume-overlay').addClass('is-active');
				return false;
		});
		$('.js-resume-refresh').each(function() {
				$('body').on('click', function() {
						$('.js-resume-refresh').removeClass('is-active');
						$('.resume-overlay').removeClass('is-active');
				});
				$(this).on('click', function(event) {
						event.stopPropagation();
				});
		});
		$('.js-resume-delete-btn').on('click', function() {
				$('.js-resume-delete').addClass('is-active');
				$('.resume-overlay').addClass('is-active');
				return false;
		});
		$('.js-resume-delete').each(function() {
				$('body').on('click', function() {
						$('.js-resume-delete').removeClass('is-active');
						$('.resume-overlay').removeClass('is-active');
				});
				$(this).on('click', function(event) {
						event.stopPropagation();
				});
		});

		//tooltips
		$('.js-tooltip').tooltipster({
				contentAsHTML: true,
				hideOnClick: true,
		});

		//price tooltip
		$('.js-price').each(function() {
				var price = $(this),
					priceInput = price.find('.js-price-input'),   
					priceDrop = price.find('.js-price-help');

					priceInput.focusin(function() {    
							priceDrop.fadeIn(200);
					});
					priceInput.focusout(function() {
					  priceDrop.fadeOut(200);
					});  
		});

		//crop

		if ($('.js-crop').length) {
				$('.js-crop').each(function() {
						var img = $(this).find('img'),
								previews = $('.js-crop-preview');

						img.cropper({
								movable: false,
								zoomable: false,
								aspectRatio: 1/1,
								autoCropArea: 0.8,

								build: function(e) {
									var clone =$(this).clone();

									clone.css({
										display: 'block',
										width: '100%',
										minWidth: 0,
										minHeight: 0,
										maxWidth: 'none',
										maxHeight: 'none',
									});

									previews.css({
										width: '100%',
										overflow: 'hidden'
									}).html(clone);
								},

								crop: function (e) {
									var imageData = $(this).cropper('getImageData');
									var previewAspectRatio = e.width / e.height;

									previews.each(function () {
									var preview = $(this);
									var previewWidth = preview.width();
									var previewHeight = previewWidth / previewAspectRatio;
									var imageScaledRatio = e.width / previewWidth;

									preview.height(previewHeight).find('img').css({
										width: imageData.naturalWidth / imageScaledRatio,
										height: imageData.naturalHeight / imageScaledRatio,
										marginLeft: -e.x / imageScaledRatio,
										marginTop: -e.y / imageScaledRatio
									});
									});
								}
						});

				});
		};

		$('.js-crop-wrap').each(function() {
			var wrap = $(this),
				close = $('.js-crop-close'),
				popup = $(this).find('.crop');

			wrap.on('click', function() {
				wrap.removeClass('is-active');
			});

			close.click(function() {
				wrap.removeClass('is-active');
				return false;
			});

			popup.click(function(event) {
				event.stopPropagation();
			});
		});

		$('.news-item__img').each(function() {
			var item = $(this),
				close = $('.js-news-close'),
				popup = $('.js-news-popup');

			item.find('img').click(function() {
				$('.js-news-img img').remove();
				$(this).clone().appendTo('.js-news-img');
				popup.addClass('is-active');
				return false;
			});

			$('body').on('click', function() {
				popup.removeClass('is-active');
			});
			close.on('click', function() {
				popup.removeClass('is-active');
			});

			popup.click(function(event) {
				event.stopPropagation();
			});
		});

	$('.js-reg-open').click(function() {
		$('.js-reg-company').slideToggle(500);
		return false;
	});

});

