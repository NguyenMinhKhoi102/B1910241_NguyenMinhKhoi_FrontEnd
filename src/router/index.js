import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";


const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
    },
    {
        path: "/login",
        name: "signin",
        component: () => import("@/views/Signin.vue"),
    },
    {
        path: "/registration",
        name: "signup",
        component: () => import("@/views/Signup.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

//Global guards
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("token");
    if (to.name !== "signin" && to.name !== "signup" && !isAuthenticated) {
        next({ name: "signin" });
    } else {
        next();
    }
});

export default router;