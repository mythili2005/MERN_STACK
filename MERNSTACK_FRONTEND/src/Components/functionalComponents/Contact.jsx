const Contact = () =>{
    return (
        <div>
        <h2>Mongodb R&D </h2>
        <ol>
            <li><h2>To achieve a output that shows
                         matchedCount : 1 
                         modifiedCount : 0
                    For this you have to key but $set the values as it is in the db </h2></li>
            <li><h2>At first insertion of record, a random _id is generated
                        When upserting a record in the db also generate a random _id
                        But insertion of record will create a number next/consecutive to the insertion _id of the db
                        Not to the upsertion _id</h2></li>
            <li><h2>Syntax : db.collectionName.deleteOne({"{"}_id:Your objectid{"}"})</h2></li>
        </ol>
    </div>);
}

export default Contact;