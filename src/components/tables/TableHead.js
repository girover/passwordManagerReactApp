const TableHead = ({bgColor, headers}) => {
    
    return (
        <thead className="">
            <tr className={`${bgColor ? 'bg-' + bgColor : ''}`}>
                {headers?.map(header => <th key={Math.random()*100000 + 1}>{header}</th>)}
            </tr>
        </thead>
    );
}

export default TableHead;