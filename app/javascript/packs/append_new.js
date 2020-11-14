$(document).ready(() => {
    var i = 2.0;
    var j = 2.0;
    $('.append_new').on('click', function() {
        if($('.update').css('display') == 'block') {
            $('.update').css('display', 'none');
            j = j + 1;
        };
        if(i % 2 == 0) {
            $('.add').css('display', 'block');
        } else {
            $('.add').css('display', 'none');
        }
        i = i + 1.0;
    })
    $('.update-note').on('click', function() {
        if($('.add').css('display') == 'block') {
            $('.add').css('display', 'none');
            i = i + 1;
        };
        if(j % 2 == 0) {
            $('.update').css('display', 'block');
        } else {
            $('.update').css('display', 'none');
        }
        j = j + 1.0;
    })

    $('.add-new-note').on('click', function() {
        let max_volume = $('.max-volume').val();
        let fullness = $('.fullness').val();
        let type = $('.type').val();
        $.ajax({
            url: '/fuels',
            method: 'post',
            data: {
                max_volume: max_volume,
                fullness: fullness,
                type: type
            },
            success: (data) => {
              window.location.reload();
            }
        });
    })

    $('.update-old-note').on('click', function() {
        let userId = $('.user-checkbox:checked').toArray().map(a => a.id)[0];
        let max_volume = $('.u_max-volume').val();
        let fullness = $('.u_fullness').val();
        let type = $('.u_type').val();
        $.ajax({
            url: '/fuels/' + userId.toString(),
            method: 'put',
            data: {
                max_volume: max_volume,
                fullness: fullness,
                type_fuel: type
            },
            success: (data) => {
              window.location.reload();
            }
        });
    })
  });