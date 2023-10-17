// populate profile container: start
const profileContainer = document.getElementById("profile-container");
const profileTemplate = (props) => `
    <div class="profile">
        <div class="pfp"><img src="${props?.avatarUri}" alt="User Image"></div>
        <h3 class="name">${props?.name}</h3>
        <div class="skills">
            ${
                (props?.skills?.length > 0) ?
                props.skills.map(skill => `<span class="skill">${skill}</span>`).join("") : ""
            }
        </div>
        <div class="social">
            ${props?.socials?.github ? `<a href="${props.socials.github}" target="_blank"><i class="fa-brands fa-github"></i></a>`: ""}

            ${props?.socials?.twitter ? `<a href="${props.socials.twitter}" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>`: ""}
        
            ${props?.socials?.linkedin ? `<a href="${props.socials.linkedin}" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>`: ""}
            
            ${props?.socials?.facebook ? `<a href="${props.socials.facebook}" target="_blank"><i class="fa-brands fa-facebook"></i></a>`: ""}
        </div>
    </div>
`;

DEV_PROFILES.forEach(profile => profileContainer.insertAdjacentHTML("beforeend", profileTemplate(profile)));
// populate profile container: end

const searchInput = document.getElementById('searchInput');
const profiles = document.querySelectorAll('.profile');
const date = document.getElementById('dates')

let currentDate  = new Date()
let currentYear  = currentDate.getFullYear()
date.innerHTML = currentYear




searchInput.addEventListener('input', filterProfiles);

function filterProfiles() {
    const query = searchInput.value.toLowerCase();

    profiles.forEach((profile) => {
        const name = profile.querySelector('.name').textContent.toLowerCase();
        const skills = profile.querySelector('.skills').textContent.toLowerCase();

        if (name.includes(query) || skills.includes(query)) {
            profile.style.display = 'block'; // Show matching profiles
        } else {
            profile.style.display = 'none'; // Hide non-matching profiles
        }
    });
}