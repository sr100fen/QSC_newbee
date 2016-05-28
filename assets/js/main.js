/*
 Author: Hao Xiangpeng
 */

(function ($) {

    "use strict";

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0
            && $header.hasClass('alt')) {

            $window.on('resize', function () {
                $window.trigger('scroll');
            });

            $banner.scrollex({
                bottom: $header.outerHeight(),
                terminate: function () {
                    $header.removeClass('alt');
                },
                enter: function () {
                    $header.addClass('alt');
                },
                leave: function () {
                    $header.removeClass('alt');
                }
            });
        }

        $('#one').scrollex({
            mode: 'top',
            initialize: function () {
                $header.css('background-color', '')
            },
            terminate: function () {
                $header.css('background-color', '')
            },
            enter: function () {
                $header.css('background-color', 'rgba(150,197,78,0.85)');

            },
            leave: function () {
                $header.css('background-color', '');

            }
        });
        $('#two').scrollex({
            mode: 'top',
            initialize: function () {
                $header.css('background-color', '')
            },
            terminate: function () {
                $header.css('background-color', '')
            },
            enter: function () {
                $header.css('background-color', 'rgba(225, 151, 5,0.85)');
            },
            leave: function () {
                $header.css('background-color', '');
            }
        });
        $('#three').scrollex({
            mode: 'top',
            terminate: function () {
                $header.css('background-color', '')
            },
            enter: function () {
                $header.css('background-color', 'rgba(1, 68, 91,0.85)');
            },
            leave: function () {
                $header.css('background-color', '');
            }
        });


        // Menu.
        var $menu = $('#menu');

        $menu._locked = false;

        $menu._lock = function () {

            if ($menu._locked)
                return false;

            $menu._locked = true;

            window.setTimeout(function () {
                $menu._locked = false;
            }, 350);

            return true;

        };

        $menu._show = function () {

            if ($menu._lock())
                $body.addClass('is-menu-visible');

        };

        $menu._hide = function () {

            if ($menu._lock())
                $body.removeClass('is-menu-visible');

        };

        $menu._toggle = function () {

            if ($menu._lock())
                $body.toggleClass('is-menu-visible');

        };

        $menu
            .appendTo($body)
            .on('click', function (event) {

                event.stopPropagation();

                // Hide.
                $menu._hide();

            })
            .find('.inner')
            .on('click', '.close', function (event) {

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                // Hide.
                $menu._hide();

            })
            .on('click', function (event) {
                event.stopPropagation();
            })
            .on('click', 'a', function (event) {

                var href = $(this).attr('href');

                event.preventDefault();
                event.stopPropagation();

                // Hide.
                $menu._hide();

                // Redirect.
                window.setTimeout(function () {
                    window.location.href = href;
                }, 350);

            });

        $body
            .on('click', 'a[href="#menu"]', function (event) {

                event.stopPropagation();
                event.preventDefault();

                // Toggle.
                $menu._toggle();

            })
            .on('keydown', function (event) {

                // Hide on escape.
                if (event.keyCode == 27)
                    $menu._hide();

            });
        $('#footer').scrollex({
            mode:top,
            enter: function () {
                $('.ds-powered-by').remove();
                $('.ds-social-links').remove();
                $('.ds-dialog-footer').remove();
            }
        });
        $('#ds-reset').scrollex({
            mode:top,
            enter:function () {
                $('.ds-dialog-footer').remove();
            }
        })


    });

})(jQuery);

// $(document).ready(
//     $('.ds-powered-by').remove()
// );
$('.ds-powered-by').load(function () {
    $('.ds-powered-by').remove();
    alert('asa');
});

console.log('我們正在尋找你！\n求是潮工作團隊是浙江大學最專業的學生組織\n如果balala\n請聯繫我吧');