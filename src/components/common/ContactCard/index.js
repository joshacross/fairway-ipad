import { BsPencilSquare } from "react-icons/bs";

const ContactCard = (className, onChange, profilePhoto, companyLogo) => {
  const handleChange = (obj) => {
    onChange(obj);
  };

  return (
    <div
      className={`md:flex justify-center items-center px-6 md:px-0 gap-3 my-3 max-w-lg hover:border w-1/3 ${className}`}
    >
      <div className="w-full relative">
        <img src={profilePhoto} alt="profile" width="200px" />
        <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
          Edit Photo <BsPencilSquare />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              handleChange({
                imageLOProfile: URL.createObjectURL(e.target.files[0]),
              });
            }}
          />
        </label>
      </div>
      <div>
        <h4
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleChange({ loName: e.target.innerHTML })}
          className="text-base font-bold hover:border"
        >
          {values.loName}
        </h4>
        <h6
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleChange({ loTitle: e.target.innerHTML })}
          className="font-bold italic text-xs hover:border"
        >
          {values.loTitle}
        </h6>
        <div className="text-xs hover:border">
          <p
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleChange({ loCompany: e.target.innerHTML })}
          >
            {values.loCompany}
          </p>
          <p>
            C:{" "}
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                handleChange({ loMobileNumber: e.target.innerHTML })
              }
            >
              {values.loMobileNumber}
            </span>
          </p>
          <p>
            O:{" "}
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                handleChange({ loOfficeNumber: e.target.innerHTML })
              }
            >
              {values.loOfficeNumber}
            </span>
          </p>
          <p
            className="mb-2"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleChange({ loEmail: e.target.innerHTML })}
          >
            {values.loEmail}
          </p>
        </div>
        <div className="relative">
          <img width="200px" src={companyLogo} alt="The Harper Team Logo" />
          <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
            Edit Logo <BsPencilSquare />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                handleChange({
                  imageFooterLogo1: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
