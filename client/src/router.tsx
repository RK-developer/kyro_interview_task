import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { userAuthVericyAction } from "./store/actions/auth-action";
import { useAppSelector, useAppDispatch } from "./hooks/redux-hooks";
import UnAuth from "./components/UnAuth";
import FormLoader from "./components/Loader/FormLoader";
import { authStorage } from "./utils/common";
const PageNotFound = React.lazy(() => import("./components/PageNotFound"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Login = React.lazy(() => import("./pages/Signin"));
const Signup = React.lazy(() => import("./pages/Signup"));
let initialLoad = true;
const MainRoute = (props: any) => {
    const { pathName } = props;
    const dispatch = useAppDispatch();
    const { isLoggedIn } = useAppSelector((state) => state?.userData);
    const authToken = authStorage("getItem");
    if (initialLoad) {
        if (!pathName) {
            dispatch(userAuthVericyAction());
            initialLoad = false;
        }
    }

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<ProtectedRoute auth={authToken && isLoggedIn} />}
                >
                    <Route path="/" element={<Profile />} />
                </Route>
                <Route
                    path="/"
                    element={<ProtectedRoute auth={authToken && isLoggedIn} />}
                >
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route
                    path="*"
                    element={<ProtectedRoute auth={authToken && isLoggedIn} />}
                >
                    <Route path="*" element={<PageNotFound />} />
                </Route>

                <Route
                    path="/login"
                    element={
                        <UnAuth
                            auth={!authToken && !isLoggedIn}
                            authBtnLink="/signup"
                            authBtnText="SIGN UP"
                        />
                    }
                >
                    <Route
                        path="/login"
                        element={
                            <Suspense
                                fallback={
                                    <FormLoader
                                        containerSx={{
                                            width: "500px",
                                            m: "0 auto",
                                            height: "calc(100vh - 280px)",
                                        }}
                                    />
                                }
                            >
                                <Login />
                            </Suspense>
                        }
                    />
                </Route>
                <Route
                    path="/signup"
                    element={
                        <UnAuth
                            auth={!authToken && !isLoggedIn}
                            authBtnLink="/login"
                            authBtnText="SIGN IN"
                        />
                    }
                >
                    <Route
                        path="/signup"
                        element={
                            <Suspense
                                fallback={
                                    <FormLoader
                                        containerSx={{
                                            width: "500px",
                                            m: "0 auto",
                                            height: "calc(100vh - 280px)",
                                        }}
                                    />
                                }
                            >
                                <Signup />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
};

export default MainRoute;
