module.exports.run = function(lurch, callback) {
  // Declare status for worst case scenario.
  var status = {success: false, message: 'Revert all features operation failed.'};

  // Execute features revert all command.
  lurch.execute('cd ' + lurch.current.path + ' && drush fra -y', function(error, stdout, stderr) {
    // If no error occured, set success properties.
    if (!error) {
      status.success = true;
      status.message = 'All features reverted.';
    }

    // Return status to lurch.
    callback(status);
  });
};
