

export default function Article({ title, content }) {
    return (
        <div className='articles'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}