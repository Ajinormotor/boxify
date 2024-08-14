/* eslint-disable react/prop-types */

const GenderCheck = ({onCheckboxChange, selectedGender}) => {
    return (
  <section className="pt-[1rem]">
      <div className="flex gap-[10px]">
  
          {/* for male */}
          <div className="flex  gap-[5px] md:flex-row">
            <label className={`${selectedGender === "male" ? "selected text-black"  : ""} `}>
  <span className="text-red-600">Male</span>
            </label>
            <input type="checkbox" className="w-[20px] h-[20px] outline-none checked:text-black" 
            checked={selectedGender === "male"}
            onChange={()=>onCheckboxChange("male")}  /> 
          </div>
  
  
  {/* for female */}
          <div className="flex gap-[5px] md:flex-row">
          <label className={`${selectedGender === "female" ? "selected "  : ""} `}>
  <span className="text-red-600">Female</span>
            </label>
            <input type="checkbox" className="w-[20px] h-[20px] outline-none checked:text-black" 
               checked={selectedGender === "female"}
               onChange={()=>onCheckboxChange("female")}/> 
          </div>
  
      </div>
  </section>
    )
  }
  
  export default GenderCheck