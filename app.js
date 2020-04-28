const github = new GitHub;
const ui = new UI;

const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //Show an alert
                ui.showAlert('User Not Found', 'alert alert-danger');

            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        //Clear Profile
        ui.clearProfile();
    }
});