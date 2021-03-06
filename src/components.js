import Vue from 'vue';
// Global Components
import App from './components/App.vue';
import Home from './components/shared/Home.vue';
import Nav from './components/shared/Nav.vue';
import Login from './components/shared/Login.vue';
import Notification from './components/shared/Notification.vue';
// OSE-Components
import EditQuota from './components/ose/EditQuota.vue';
import NewProject from './components/ose/NewProject.vue';
import NewTestProject from './components/ose/NewTestProject.vue';
import AdminList from './components/ose/AdminList.vue';
import UpdateBilling from './components/ose/UpdateBilling.vue';
import NewServiceAccount from './components/ose/NewServiceAccount.vue';
// Gluster-Components
import FixGluster from './components/volume/FixGluster.vue';
import NewVolume from './components/volume/NewVolume.vue';
import GrowVolume from './components/volume/GrowVolume.vue';
// DDC-Components
import DDCBilling from './components/ddc/Billing.vue';
// AWS Components
import ListS3Buckets from './components/aws/ListS3Buckets.vue';
import NewS3Bucket from './components/aws/NewS3Bucket.vue';
import NewS3User from './components/aws/NewS3User.vue';
import ListEC2Instances from './components/aws/ListEC2Instances.vue';
// Sematext Components
import SematextAppList from './components/sematext/AppList.vue';
import SematextNewApp from './components/sematext/NewApp.vue';
import SematextChangeBilling from './components/sematext/ChangeBilling.vue';
import SematextChangePlan from './components/sematext/ChangePlan.vue';
// WZU Components
import WZUArtifactory from './components/wzu/Artifactory.vue';
import WZUJira from './components/wzu/Jira.vue';


Vue.component('login', Login);
Vue.component('navbar', Nav);
Vue.component('notification', Notification);

Vue.mixin({
    mounted: function () {
        this.$nextTick(() => {
            let field = this.$refs.autofocus
            if (field) {
                field.focus()
            }
        })
    }
})

export const GlobalComponents = {
    App,
    Login
};

export const LocalComponents = {
    Home,
    EditQuota,
    NewProject,
    AdminList,
    NewTestProject,
    UpdateBilling,
    NewServiceAccount,
    FixGluster,
    NewVolume,
    GrowVolume,
    DDCBilling,
    ListS3Buckets,
    ListEC2Instances,
    NewS3Bucket,
    NewS3User,
    SematextAppList,
    SematextNewApp,
    SematextChangeBilling,
    SematextChangePlan,
    WZUArtifactory,
    WZUJira
};
