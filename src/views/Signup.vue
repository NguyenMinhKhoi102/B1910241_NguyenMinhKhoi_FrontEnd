<template>
    <div class="page">
        <h4>Đăng ký</h4>
        <SignUpForm @submit:signup="submitSignUp" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import SignUpForm from "@/components/SignUpForm.vue";
import userService from "@/services/user.service";

export default {
    components: {
        SignUpForm,
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async submitSignUp(data) {
            try {
                console.log(data);
                await userService.signUp(data);
                console.log("123");
                this.$router.push("/login");
            } catch (error) {
                console.log(error);
                this.message = "Đăng ký thất bại. Vui lòng thử lại.";
            }
        },
    },
};
</script>