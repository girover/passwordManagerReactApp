const CardHeader = (pros) => {
    const { bgColor, textColor, fs, icons, title } = pros;
    return (
        <div className={`card-header bg-${bgColor ?? 'blue-300'} fs-${fs ?? '6'} text-${textColor ?? 'sky-950'}`}>
            <span>
                {icons.map(icon => <i key={Math.random() * 100000 + 1} className={icon}></i>)}
            </span>
            <span className="px-2">{title}</span>
        </div>
    );
}

export default CardHeader;