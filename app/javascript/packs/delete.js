$(document).ready(() => {
    $('.user-checkbox').change(e => {
      let allChecked = $('.user-checkbox:checked').length == $('.user-checkbox').length;
      $('#checkall').prop('checked', allChecked);
    });
    
    $('#checkall').change(e => {
      $('.user-checkbox').prop('checked', e.target.checked);
    });
  
    $('.delete_tanks').click(() => {
      let userIds = $('.user-checkbox:checked').toArray().map(a => a.id);
      $.ajax({
        url: '/tanks/destroy',
        method: 'delete',
        data: {
          user_ids: userIds
        },
        success: (data) => {
          window.location.reload();
        }
      });
    })
  });