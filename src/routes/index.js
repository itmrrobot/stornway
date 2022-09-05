import Home from '~/pages/Home';
import About from '~/pages/About';
import Projects from '~/pages/Projects';
import Services from '~/pages/Services';
import Careers from '~/pages/Careers';
import Contacts from '~/pages/Contacts';
import CareersSC from '~/pages/Careers-safety-coordinator';
import CareersCM from '~/pages/Careers-construction-manager';
import CareersCE from '~/pages/Careers-construction-engineer';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/services', component: Services },
    { path: '/careers', component: Careers },
    { path: '/contacts', component: Contacts },
    { path: '/careers/careers-safety-coordinator', component: CareersSC },
    { path: '/careers/careers-construction-manager', component: CareersCM },
    { path: '/careers/careers-construction-engineer', component: CareersCE }
]

