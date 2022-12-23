import { /**useAppDispatch,**/ useAppSelector } from "../../hooks/redux-hooks";
// import {getProfileDetailsByUserId} from "../../store/actions/my-profile";
import {useEffect} from "react";


const DetailView = () => {
    const profileData = useAppSelector(state=>state.profileData.myProfileState);
    useEffect(() => {
        console.log("profileData: ", profileData);
    },[profileData])
    return (
        <>
            <h4>Detail View</h4>
        </>
    )
}

export default DetailView