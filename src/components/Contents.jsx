import Card from "./Card"

const cardData = [
    {
        title : 'JavaScript',
        content : 'JavaScript is a programming language that is commonly used in web development. It allows you to create interactive and dynamic websites.',
        date : '11/01/2547'
    },
    {
        title : 'JavaScript',
        content : 'JavaScript is a programming language that is commonly used in web development. It allows you to create interactive and dynamic websites.',
        date : '11/01/2547'
    },
    {
        title : 'JavaScript',
        content : 'JavaScript is a programming language that is commonly used in web development. It allows you to create interactive and dynamic websites.',
        date : '11/01/2547'
    },
    {
        title : 'JavaScript',
        content : 'JavaScript is a programming language that is commonly used in web development. It allows you to create interactive and dynamic websites.',
        date : '11/01/2547'
    },
    {
        title : 'JavaScript',
        content : 'JavaScript is a programming language that is commonly used in web development. It allows you to create interactive and dynamic websites.',
        date : '11/01/2547'
    },
]
const Contents = () => {
  return (
    <div className="p-4">
        <div>
            <h1 className="p-4 font-semibold text-2xl text-zinc-700">Good Morning</h1>
            <p className="px-4 py-2 text-zinc-700/80 font-medium">Wed. Oct 05 2023</p>
        </div>
        <div>
            <p className="px-4 py-2 sub-header">JavaScript guide</p>
        </div>
        <div className="grid grid-cols-4 gap-3 p-3">
            {cardData.map(({title , content , date}, index)=>(
                <Card title={title} content={content} date={date} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default Contents