import CommentCard from "../Home/CommentCard";
import rawdataReturned from '../DataCalculations/rawData';
import HomeHeader from "../Home/HomeHeader";

function Comments () {
    return (
        <>
            <HomeHeader title={'Comments'}/>
            {
                rawdataReturned.map((item) => {return (
                    <CommentCard client={item}/>
                )})
            }
        </>
    )
}

export default Comments;