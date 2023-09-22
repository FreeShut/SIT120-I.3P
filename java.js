const Home = {
    template: `
        <div>
            <img src="images/1.jpg" alt="Profile Picture" class="profile-picture">
            <h2 class="home-text">About Me</h2>
            <p class="home-text">[Hi, my name is Jack Guan. Nice to meet you. My skills are listed below.]</p>
            <table>
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="skill in skills">
                        <td>{{ skill.name }}</td>
                        <td>{{ skill.level }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    data() {
        return {
            skills: [
                { name: 'HTML', level: 'Expert' },
                { name: 'CSS', level: 'Advanced' },
                { name: 'Vue', level: 'Intermediate' }
            ]
        };
    }
};

const Projects = {
    template: `
        <div v-for="(project, index) in projects"
            :class="[
                'project-container',
                index % 2 === 0 ? 'even-project' : 'odd-project']">
            <div class="project-image-container">
                <img :src="project.image" alt="Project Image" class="project-image">  <!-- Corrected here -->
            </div>
            <div class="project-description">
                <p>{{ project.description }}</p>
            </div>
        </div>
    `,
    data() {
        return {
            projects: [
                { image: 'images/project.png', description: 'The first one is the first webpage I created while studying SIT253.' },
                { image: 'images/project1.png', description: 'This is a work I created using Blinder modeling software.' },
                { image: 'images/project2.png', description: 'The last one is an Ardunio component created and written using the Thinkcard web page when studying SIT123. ' },
            ]
        };
    }
};


const Contact = {
    template: `
        <div class="contact-background">
            <h2>Contact Me</h2>
            <table>
                <tr>
                    <td>Name:</td>
                    <td>Jack Guan</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>ppv@deakin.edu.au</td>
                </tr>
            </table>
            <form @submit.prevent="sendEmail">
                <input v-model="message" placeholder="Your message" />
                <button type="submit">Send Email</button>
            </form>
        </div>
    `,
    data() {
        return {
            message: ''
        };
    },
    methods: {
        sendEmail() {
            alert(`Email sent to Jack Guan: ${this.message}`);
            this.message = '';
        }
    }
};

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});


const app = Vue.createApp({});
app.use(router);
app.mount('#app');