$(document).ready(() => {
    var i = 2.0;
    var j = 2.0;
    $('.append-new-order').on('click', function() {
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
    $('.update-order').on('click', function() {
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

    $('.add-new-order').on('click', function() {
        let quantity = $('.fuel_quantity').val();
        let fuel_type = $('.fuel_type_id').val();
        $.ajax({
            url: '/orders',
            method: 'post',
            data: {
                fuel_quantity: quantity,
                fuel_type_id: fuel_type
            },
            success: () => {
              window.location.reload();
            }
        });
    })
  });