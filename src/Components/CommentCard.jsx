function CommentCard ({client}) {

    let isPositive = client.averageScore > 2.5 ? true : false;
    let positiveClass = isPositive ? 'positiveComment' : 'negativeComment';
    
    return (
        <div className={positiveClass}>
            <p className="commentText">"{client.comments}"</p>
            <div className='commentInfo'>
            <p className='commentTime'>{client.timestamp}</p>
            <p className='commentClinician' >{client.clinician}</p>
            </div>
        </div>
    )
}

export default CommentCard;