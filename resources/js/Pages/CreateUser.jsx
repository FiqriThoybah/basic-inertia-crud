import { Helmet } from "react-helmet";
import Layout from "../Components/Layout";
import { useRef, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert";
import { InertiaLink } from "@inertiajs/inertia-react";
import { SlideshowLightbox } from "lightbox.js-react";
import Avatar from "../../../public/images/Avatar.jpg";

export default function CreateUser({ errors, editUsers }) {
    console.log("error :", errors);
    console.log('lihat edit user :', editUsers);
    const imageRef = useRef();
    const [image, setImage] = useState(base_url + "/" + editUsers ?.image || "");
    const [values, setValues] = useState({
        name: editUsers?.name || "",
        email: editUsers?.email || "",
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
        setValues({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        });
        const formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("image", imageRef.current.files[0]);
        Inertia.post(route("users.store"), formData, {
            onSuccess: () => {
                swal("Good job!", "You clicked the button!", "success");
            },
        });
        console.log(values);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', editUsers.id)
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append("image", imageRef.current.files[0]);
        formData.append("_method", 'put')
        Inertia.post(route("users.update", editUsers.id), formData, {
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

    const buttonDisableUpdate = () => {
        if (
            values.name === "" ||
            values.email === ""
        ) {
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
    
    const handleUpload = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onloaded = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div className="h-[100vh]">
            <Helmet>
                <title>CreateUser</title>
            </Helmet>
            <div>
                <div className="flex py-2 px-4 text-[30px]  font-bold  ">
                    <InertiaLink
                        href="http://127.0.0.1:8000/users"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        Back /
                    </InertiaLink><span className="ml-2 text-slate-500">{editUsers ? "Update" : "Create"}</span>
                </div>
                <div>
                    <h1 className="text-center text-2xl font-bold mb-3">{editUsers?'Form Update User' : 'Form Register User'}</h1>
                </div>
                <div>
                    <SlideshowLightbox>
                        <img
                            className="w-32 h-32 mx-auto border border-black overflow-hidden rounded-full"
                            src={image === "" ? Avatar : image}
                            alt="avatar.png"
                        />
                    </SlideshowLightbox>
                </div>
                <form
                    onSubmit={editUsers ? handleUpdate : handleSubmit}
                    action="post"
                    encType="multipart/form-data"
                >
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
                    {editUsers ? '' : (<div><div>
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
                    </div></div>)}
                    <div>
                        <label
                            className={styles.classNameLabel}
                            htmlFor="image"
                        >
                            image
                        </label>
                        <input
                            type="file"
                            className={styles.classNameInput}
                            id="image"
                            ref={imageRef}
                            onChange={handleUpload}
                        />
                        {/* error dibagian backend (server) */}
                        {errors.image && (
                            <div className={styles.classNameAlert}>
                                {errors.image}
                            </div>
                        )}
                        {/* error dibagian frontend  */}
                        <div className={styles.classNameAlert}>
                            {error.image}
                        </div>
                    </div>
                    <div>
                        <button
                            className={`w-full ${
                                (editUsers ? buttonDisableUpdate() : buttonDisable()) ? "bg-blue-200" : "bg-blue-500"
                            } text-white text-lg font-semibold`}
                            type="submit"
                            disabled={editUsers ? buttonDisableUpdate() : buttonDisable()}
                        >
                            {editUsers ? "Update" : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
CreateUser.layout = (page) => <Layout children={page} />;
