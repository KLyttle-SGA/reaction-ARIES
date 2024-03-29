import React from "react";
import { MdClose } from "react-icons/md"

const Tags = (props) => {
    const [error, setError] = React.useState("");
    const [tags, setTags] = React.useState([]);

    // Add or remove tags by using the key
    const handleTags = event => {
        if (event.key === "Enter" && event.target.value !== "" && tags.length < props.maxTagCount) {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
        else if (event.key === "Backspace" && tags.length && event.target.value == 0) {
            const tagsCopy = [...tags];
            tagsCopy.pop();
            event.preventDefault();
            setTags(tagsCopy);
        }
        else if (tags.length < 1 && event.key === "Backspace") {
            setError("There are no more tags to delete.");
        }
        else if (tags.length >= props.maxTagCount) {
            setError("You can't add more than 12 tags.");
        }
        else if (event.target.value == "" && event.key === "Enter") {
            setError("Tag should be at least one character long.");
        }
    };

    //Remove tags by clicking the cross sign
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    //To update the error after user changes something
    const handleError = () => {
        setError("");
    }

    return (
        <>
            <div className="tags">
                <input
                    className="form-control search-bar"
                    type="text"
                    onKeyDown={event => handleTags(event)}
                    onChange={handleError}
                    placeholder="Search by Tags"
                />

                {tags.map((tag, index) => (
                    <div className="single-tag" key={index}>
                        <span>{tag}</span>
                        <i
                            onClick={() => removeTags(index)}
                        >
                            <MdClose />
                        </i>
                    </div>
                ))}
            </div>

            <div className="error">
                {error}
            </div>
        </>
    );
};
export default Tags;