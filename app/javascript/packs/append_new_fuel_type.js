$(document).ready(() => {
    var i = 2.0;
    var j = 2.0;
    $('.append-new-fuel-type').on('click', function() {
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
    $('.update-fuel-type').on('click', function() {
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

    $('.add-new-fuel-type').on('click', function() {
        let name = $('.fuel-name').val();
        let cost = $('.fuel-cost').val();
        $.ajax({
            url: '/fuel_types',
            method: 'post',
            data: {
                name: name,
                cost: cost
            },
            success: () => {
              window.location.reload();
            }
        });
    })

    $('.update-old-fuel-type').on('click', function() {
        let userId = $('.user-checkbox:checked').toArray().map(a => a.id)[0];
        let name = $('.u_fuel-name').val();
        let cost = $('.u_fuel-cost').val();
        $.ajax({
            url: '/fuel_types/' + userId.toString(),
            method: 'put',
            data: {
                name: name,
                cost: cost
            },
            success: () => {
              window.location.reload();
            }
        });
    })
  });