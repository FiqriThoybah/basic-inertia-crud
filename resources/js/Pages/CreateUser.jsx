import { Helmet } from "react-helmet";
import Layout from "../Components/Layout";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert";

export default function CreateUser({ errors }) {
    console.log("error :", errors);
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [error] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));

        switch (key) {
            case "name":
                error.name = value === "" ? "nama harus diisi" : "";
                break;
            case "email":
                error.email =
                    value === ""
                        ? "email harus diisi"
                        : regExp.test(value)
                        ? ""
                        : "format email invalid";
                break;
            case "password":
                error.password =
                    value === ""
                        ? "password harus diisi"
                        : value.length < 8
                        ? "password minimal 8 karakter"
                        : "";
                break;
            case "password_confirmation":
                error.password_confirmation =
                    value === ""
                        ? "password harus diisi"
                        : value.length < 8
                        ? "password confirmation minimal 8 karakter"
                        : "";
                break;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("users.post"), values, {
            onSuccess: () => {
                swal("Good job!", "You clicked the button!", "success");
            },
        });
        console.log(values);
    };

    const buttonDisable = () => {
        if (
            values.name === "" ||
            values.email === "" ||
            values.password === "" ||
            values.password_confirmation === ""
        ) {
            return true;
        } else if (values.password !== values.password_confirmation) {
            return true;
        } else {
            return false;
        }
    };

    const styles = {
        classNameInput:
            "border py-2 w-full px-2 mb-3 bg-gray-200 focus:bg-blue-400",
        classNameLabel: "text-md text-gray-600 mb-2 font-semibold uppercase",
        classNameAlert: "text-red-500",
    };

    return (
        <div>
            <Helmet>
                <title>CreateUser</title>
            </Helmet>
            <div>
                <h1>Crete New User</h1>
                <form onSubmit={handleSubmit} action="post">
                    <div>
                        <label className={styles.classNameLabel} htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            className={styles.classNameInput}
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="name..."
                        />
                        {/* error dibagian backend (server) */}
                        {errors.name && (
                            <div className={styles.classNameAlert}>
                                {errors.name}
                            </div>
                        )}
                        {/* error dibagian frontend  */}
                        <div className={styles.classNameAlert}>
                            {error.name}
                        </div>
                    </div>
                    <div>
                        <label
                            className={styles.classNameLabel}
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            className={styles.classNameInput}
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="email..."
                        />
                        {errors.email && (
                            <div className={styles.classNameAlert}>
                                {errors.email}
                            </div>
                        )}
                        <div className={styles.classNameAlert}>
                            {error.email}
                        </div>
                    </div>
                    <div>
                        <label
                            className={styles.classNameLabel}
                            htmlFor="password"
                        >
                            password
                        </label>
                        <input
                            type="password"
                            className={styles.classNameInput}
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="password..."
                        />
                        {errors.password && (
                            <div className={styles.classNameAlert}>
                                {errors.password}
                            </div>
                        )}
                        <div className={styles.classNameAlert}>
                            {error.password}
                        </div>
                    </div>
                    <div>
                        <label
                            className={styles.classNameLabel}
                            htmlFor="password_confirmation"
                        >
                            password confirmation
                        </label>
                        <input
                            type="password"
                            className={styles.classNameInput}
                            id="password_confirmation"
                            value={values.password_confirmation}
                            onChange={handleChange}
                            placeholder="password_confirmation..."
                        />
                        {errors.password_confirmation && (
                            <div className={styles.classNameAlert}>
                                {errors.password_confirmation}
                            </div>
                        )}
                        <div className={styles.classNameAlert}>
                            {error.password_confirmation}
                        </div>
                        <div className={styles.classNameAlert}>
                            {values.password !== values.password_confirmation
                                ? "password dan password confirmation tidak cocok"
                                : ""}
                        </div>
                    </div>
                    <div>
                        <button
                            className={`w-full ${
                                buttonDisable() ? "bg-blue-200" : "bg-blue-500"
                            } text-white text-lg font-semibold`}
                            type="submit"
                            disabled={buttonDisable()}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
CreateUser.layout = (page) => <Layout children={page} />;
