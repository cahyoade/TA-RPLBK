function Profile() {
    const kel36 = [
        {name: 'Cahyo', nim: '21120120130123'},
        {name: 'Daniel', nim: '21120120140175'},
        {name: 'Ferry', nim: '21120120140039'},
        {name: 'Helmi', nim: '21120119120009'}
    ]

    return ( 
        <div className="flex flex-col items-center py-24 h-[calc(100svh-96px)] ">
            <h1 className="font-bold text-4xl mb-4">Artsy</h1>
            <p className="text-xl">List artworks dari api Art Institute Of Chicago, TA RPLBK Kel 36</p>
            <div className="flex gap-16 mt-16">
                {kel36.map((student, id) => 
                    <div key={id} className="flex flex-col items-center">
                        <img src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${student.name}`} alt="" className="mb-4"/>
                        <p className="font-bold">{student.name}</p>
                        <p>{student.nim}</p>
                    </div>
                )}
            </div>
        </div>
     );
}

export default Profile;