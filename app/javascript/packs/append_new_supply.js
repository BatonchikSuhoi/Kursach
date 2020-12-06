$(document).ready(() => {
    var i = 2.0;
    var j = 2.0;
    $('.append-new-supply').on('click', function() {
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
    $('.update-supply').on('click', function() {
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

    $('.add-new-supply').on('click', function() {
        let quantity = $('.fuel_quantity').val();
        let fuel_type = $('.fuel_type_id').val();
        let supplier = $('.supplier_id').val();
        $.ajax({
            url: '/supplies',
            method: 'post',
            data: {
                fuel_quantity: quantity,
                fuel_type_id: fuel_type,
                supplier_id: supplier
            },
            success: () => {
              window.location.reload();
            }
        });
    })

    $('.update-old-supply').on('click', function() {
        let userId = $('.user-checkbox:checked').toArray().map(a => a.id)[0];
        let quantity = $('.u_fuel_quantity').val();
        let fuel_type = $('.u_fuel_type_id').val();
        let supplier = $('.u_supplier_id').val();
        $.ajax({
            url: '/supplies/' + userId.toString(),
            method: 'put',
            data: {
                fuel_quantity: quantity,
                fuel_type_id: fuel_type,
                supplier_id: supplier
            },
            success: () => {
              window.location.reload();
            }
        });
    })
  });