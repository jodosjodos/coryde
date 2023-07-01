const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-10">
      <h1 className="text-4xl">Our Team</h1>
      <div className="flex flex-row gap-24">
        {/* team section */}

        {/* each memebr */}
        <div className="bg-[#D9D9D9] flex flex-col items-center justify-center  p-7">
          <img
            src="/assets/badext.png"
            alt=" astrie profile"
            className="object-contain rounded-full"
          />
          <p>UWUMVIYIMANA </p>
          <p>Astrie</p>
          <p>Position:C.E.O</p>
        </div>

        <div className="bg-[#D9D9D9] flex flex-col items-center justify-center  p-7">
          <img
            src="/assets/nadette.png"
            alt="natedetee profile"
            className="object-contain rounded-full"
          />
          <p>BATETE Ange </p>
          <p>Nadette</p>
          <p>Position: Designer</p>
        </div>

        
          {/* each memebr */}
          <div className="bg-[#D9D9D9] flex flex-col items-center justify-center  p-7">
            <img
              src="/assets/badext.png"
              alt=" badext profile"
              className="object-contain rounded-full"
            />
            <p>ABAYISENGA </p>
            <p>Aimee Pacifique</p>
            <p>Position: Backend</p>
          </div>
        
      
          {/* each memebr */}
          <div className="bg-[#D9D9D9] flex flex-col items-center justify-center  p-7">
            <img
              src="/assets/jodos.jpeg"
              alt=" jodos profile"
              className="object-contain rounded-full w-16 h-16"
            />
            <p>Nshimyumukiza</p>
            <p> Jean de Dieu</p>
            <p>Position: Backend</p>
          </div>
        
      </div>
    </div>
  );
};

export default Team;
