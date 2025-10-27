# DevProfiles 👩‍💻👨‍💻
DevProfiles is a platform to list and showcase your developer skills and profiles, allowing you to create a personalized profile to highlight your projects, and expertise. It's designed to help developers connect with collaborators, and the wider developer community.

<hr>

# **Contributing Guidelines** 📄

This documentation contains a set of guidelines to help you during the contribution process.
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project.
Thank you for helping out and remember, **no contribution is too small.**

## **Code of Conduct** 🤝

Please note that this project follows a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms. We are committed to providing a welcoming and inclusive environment for all contributors.


- Drop a Star ⭐ in this repo
- Follow Account
   -https://github.com/Gyanthakur
- Take a look at the existing [Issues](https://github.com/Gyanthakur/Dev_Profiles/issuess) or Create an `Issue` of your own. 
- At first raise an issue in which you want to work and wait till its is assigned to you
- Then after being assigned issue,work on it & make a PR 
- Create a **Pull Request**, which will be promptly reviewed by the maintainer 
- Suggestion: Add screenshots or screen captures to your `Pull Request` to help us understand the effects of the changes that are included in 
  your commits.

  <hr>


# **Steps to making a PR**

## **1. Start by forking the [**Dev_Profiles**](https://github.com/Gyanthakur/Dev_Profiles) repository. Click on the <a href="https://github.com/Gyanthakur/Dev_Profiles/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a> symbol at the top right corner.**

## **2. Clone your forked repository to your local environment:**

```bash
git clone https://github.com/[your-username]/Dev_Profiles.git
```

## **3. Add a reference(remote) to the original repository:**

```bash
git remote add upstream https://github.com/GyanthakurDev_Profiles
```

## **4. Check the remotes for this repository:**

```bash
git remote -v
```

## **5.Always take a pull from the upstream repository to your master branch to keep it at par with the main project (updated repository).**

```bash
git pull upstream main
```

## **6.Create a Branch:**
```bash
git checkout -b <Branch-name>
```

## **7. Make Changes and Add them:**
<br>
- After you have made your changes, check the status of the changed files using the following command:
  
    ```sh
    git status -s
    ```
```bash
git add .
git add <filename>
```

## **8.Commit your Changes with a descriptive commit message:** 

```bash
git commit -m <Concise Description of the changes made>
```

## **9. Push Changes: Push your changes to your forked repository:** 

```bash
git push origin <Branch-name>
```

## **10. Submit a Pull Request: Go to your forked repository on GitHub and submit a pull request. Be sure to provide a detailed description of your changes and why they are necessary.** 

## **11.Congratulations! You've made contribution! 🙌🏼** 


<hr>

# **Want to add your Profile to [**Dev_Profiles**](https://github.com/Gyanthakur/Dev_Profiles) ?**

Simply add following code to HTML `index.html` between another `<!--Profiles-->` comment

**1. before adding profile or project, update or sync your branch by clicking `Sync fork`button
 <img width="684" alt="image" src="https://github.com/Gyanthakur/Dev_Profiles/assets/98226958/d8924e0d-3817-468a-9205-1af3df47327f">** 

   
2.and keep in mind don't add in top and bottom your profile, add in between.  

```html
        <div class="profile">
            <div class="lines"></div>
            <!-- change './default.png' to your profile image url -->
            <div class="pfp"><img src="./default.png" alt="User Image"></div>
            <h3 class="name">Your Name</h3>
            <div class="skills">
                <span class="skill">[SKILL-1]</span>
                <span class="skill">[SKILL-2]</span>
                <span class="skill">[SKILL-3]</span>
                <span class="skill">[SKILL-3]</span>
                <span class="skill">[SKILL-3]</span>
            </div>
            <div class="social">
                <a href="[YOUR GITHUB URL]" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="[YOUR X/TWITTER URL]" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="[YOUR LINKEDIN URL]" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="[YOUR FACEBOOK URL]" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        </div>
    </div>
```
> Note: Do not add your profile in top.

## 3. Change/Replace the placeholders with your image and profiles urls** 
    - [IMAGE-URL] with your image URL
    - [YOUR_NAME] with your name
    - [SKILL-1], [SKILL-2], [SKILL-3] with your skills
    - [YOUR GITHUB URL], [YOUR X/TWITTER URL] & [YOUR LINKEDIN URL] with your Github, X/Twitter & LinkedIn profile URL repectively.

### and your project in `project.html` as follows and keep in mind don't add in top and bottom your project, add in between  another project.

```html
        <div class="profile">
            <div class="lines"></div>
            <!-- change './default.png' to your profile image url -->
            <div class="pfp"><img src="./default.png" alt="User Image"></div>
            <h3 class="name">Your Name</h3>
            <div class="project">
                <a href="[Your Github URL]" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="[Your Github Repository URL]" target="_blank"><i class="fa-solid fa-money-bill-transfer"></i></a>
                <a href="[Project Deploy URL(If applicable)]" target="_blank"><i class="fa-brands fa-octopus-deploy"></i></a>
            </div>
            <div class="projectNam">
                <span >Your Project Title</span>
                <!-- Do not change Repo URl and Dploy Link given under two line  -->
                <span >Repo Url</span>
                <span >Deploy Link</span>
            </div>
            <div class="skills">
                <span class="skill">Skill-1</span>
                <span class="skill">Skill-2</span>
                <span class="skill">Skill-3</span>
                <span class="skill">Skill-4</span>

            </div>
            <div class="social">
                <a href="[YOUR GITHUB URL]" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="[YOUR X/TWITTER URL]" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="[YOUR LINKEDIN URL]" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="[YOUR FACEBOOK URL]" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            </div>
        </div>
```



## **4. Commit your changes.** 

## **5. Push the changes.** 

## **6. Create a Pull Request.** 

## **7. Wait for Merge.** 

 
 ## Need Help? Contact Me!

If you have any query or confusion, you can WhatsApp me by clicking the button below:

<a href="https://wa.me/918957818597?text=Hey%20%F0%9F%91%8B%2C%20how%20can%20I%20help%20you%3F">
    <img src="https://img.shields.io/badge/WhatsApp-Click%20Me-25D366?style=for-the-badge&logo=whatsapp" alt="WhatsApp" />
</a>

Or reach me directly at this whatsapp number: **+91 895-7818-597**




## Thank You!!!
Thank you to every contributor of this repository <br>
Show some love by giving a star ⭐ to this repository!
