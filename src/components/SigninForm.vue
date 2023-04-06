<template>
    <Form @submit="submitSignIn" :validation-schema="signInFormSchema">
        <div class="form-group">
            <label for="userId">UserId</label>
            <Field name="userId" type="text" class="form-control" v-model="signInLocal.userId" />
            <ErrorMessage name="userId" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field name="password" type="password" class="form-control" v-model="signInLocal.password" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group">
            <button class="btn btn-primary">Đăng nhập</button>
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
    emits: ["submit:signin"],
    data() {
        const signInFormSchema = yup.object().shape({
            userId: yup
                .string()
                .required("UserId không được để trống."),
            password: yup.string().required("Mật khẩu không được để trống."),
        });
        return {
            signInLocal: {
                userId: "",
                password: "",
            },
            signInFormSchema,
        };
    },
    methods: {
        submitSignIn() {
            this.$emit("submit:signin", this.signInLocal);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>