$(document).ready(() => {
    var i = 2.0;
    var j = 2.0;
    $('.append-new-tank').on('click', function() {
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
    $('.update-tank').on('click', function() {
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

    $('.add-new-tank').on('click', function() {
        let max_volume = $('.max-volume').val();
        let fullness = $('.fullness').val();
        let fuel_type = $('.fuel_type_id').val();
        $.ajax({
            url: '/tanks',
            method: 'post',
            data: {
                max_volume: max_volume,
                fullness: fullness,
                fuel_type_id: fuel_type
            },
            success: (data) => {
              window.location.reload();
            }
        });
    })

    $('.update-old-tank').on('click', function() {
        let userId = $('.user-checkbox:checked').toArray().map(a => a.id)[0];
        let max_volume = $('.u_max-volume').val();
        let fullness = $('.u_fullness').val();
        let fuel_type = $('.u_fuel_type_id').val();
        $.ajax({
            url: '/tanks/' + userId.toString(),
            method: 'put',
            data: {
                max_volume: max_volume,
                fullness: fullness,
                fuel_type_id: fuel_type
            },
            success: (data) => {
              window.location.reload();
            }
        });
    })
  });