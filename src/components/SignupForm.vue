<template>
    <!-- Form sử dụng thư viện VeeValidate để hiển thị validation error message và emit event khi submit -->
    <Form @submit="submitSignUp" :validation-schema="signUpFormSchema">
        <!-- Tạo ra input field cho email -->
        <div class="form-group">
            <label for="userId">UserId</label>
            <Field name="userId" type="text" class="form-control" v-model="signUpLocal.userId" />
            <!-- Hiển thị validation error message nếu có -->
            <ErrorMessage name="userId" class="error-feedback" />
        </div>
        <!-- Tạo ra input field cho password -->
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field name="password" type="password" class="form-control" v-model="signUpLocal.password" />
            <!-- Hiển thị validation error message nếu có -->
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <!-- Tạo ra input field cho passwordConfirmation -->
        <div class="form-group">
            <label for="passwordConfirmation">Xác nhận mật khẩu</label>
            <Field name="passwordConfirmation" type="password" class="form-control"
                v-model="signUpLocal.passwordConfirmation" />
            <!-- Hiển thị validation error message nếu có -->
            <ErrorMessage name="passwordConfirmation" class="error-feedback" />
        </div>
        <!-- Tạo ra nút submit form -->
        <div class="form-group">
            <button class="btn btn-primary">Đăng ký</button>
        </div>
    </Form>
</template>
  
<script>

import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:signup"],
    data() {
        // Định nghĩa validation schema sử dụng thư viện yup
        const signUpFormSchema = yup.object().shape({
            userId: yup.string().required("UserId không thể trống."),
            password: yup.string().required("Mật khẩu không được để trống."),
            passwordConfirmation: yup
                .string()
                .oneOf([yup.ref("password"), null], "Mật khẩu xác nhận không trùng khớp.")
                .required("Mật khẩu xác nhận không được để trống."),
        });
        return {
            // Khởi tạo data cho các field trong form
            signUpLocal: {
                userId: "",
                password: "",
                passwordConfirmation: "",
            },
            signUpFormSchema,
        };
    },
    methods: {
        submitSignUp() {
            this.$emit("submit:signup", this.signUpLocal);
        },
    },
};
</script>
  
<style scoped>
@import "@/assets/form.css";
</style>
  