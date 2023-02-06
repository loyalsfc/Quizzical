function InputWrapper({id, label, children}){
    return(
      <div className='my-4 flex flex-col gap-1 first:mt-2'>
        <label htmlFor={id} className="font-medium">{label}:</label>
        {children}
      </div>
    )
}

export default InputWrapper