import React from 'react'

const InputField = () => {
    return (
        <div id="details1" className="details">
            <textarea id="content" name="content" cols="100" rows="13" placeholder=" " required></textarea>
            <label htmlFor="content" className="form_content" id="spamType">Content</label>
        </div>
    )
}

export default InputField
