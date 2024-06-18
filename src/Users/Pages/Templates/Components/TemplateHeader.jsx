import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Switch from "../../../../CommonComponents/Switch";
import "./TemplateHeader.css";
function TemplateHeader({
  isEdit,
  templateDetails,
  changeTemplateDetails,
  onEditSectionClick,
  availableSection,
}) {
  const [contactDetails, setContactDetails] = useState([
    {
      id: 1,
      name: "Phone",
      icon: "bi-telephone",
      value: "01234567",
      showIcons: false,
      editText: false,
    },
    {
      id: 2,
      name: "Email",
      icon: "bi-envelope",
      value: "test@g.com",
      showIcons: false,
      editText: false,
    },
  ]);
  const availableAvatarShapes = {
    ROUNDED: "t-user-round",
    SEMI: "t-user-semi",
    SQUARE: "t-user-square",
  };
  const [avatarShape, setAvatarShape] = useState(availableAvatarShapes.ROUNDED);
  const availableIcons = [
    { id: 1, icon: "bi-telephone" },
    { id: 2, icon: "bi-envelope" },
    { id: 3, icon: "bi-linkedin" },
    { id: 4, icon: "bi-geo-alt-fill" },
    { id: 5, icon: "bi-git" },
    { id: 6, icon: "bi-instagram" },
    { id: 7, icon: "bi-threads" },
    { id: 8, icon: "bi-whatsapp" },
    { id: 9, icon: "bi-meta" },
    { id: 10, icon: "bi-facebook" },
    { id: 11, icon: "bi-youtube" },
  ];
  const [editField, setEditField] = useState("");
  const [selectedContactId, setSelectedContactId] = useState(0);
  const availableEditFields = {
    NAME: "NAME",
    ROLE: "ROLE",
    CONTACT_DETAILS: "CONTACT_DETAILS",
    CONTACT_DETAILS_ICONS: "CONTACT_DETAILS_ICONS",
    USER_IMAGE: "USER_IMAGE",
  };
  const fileInputRef = useRef(null);
  const [displayDetails, setDisplayDetails] = useState({
    image: true,
    extraLink: true,
  });
  const [openSettings, setOpenSettings] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn4.iconfinder.com/data/icons/mayssam/512/user-512.png"
  );

  useEffect(() => {
    console.log("isedit");
    if (!isEdit) {
      setEditField("");
      setOpenSettings(false);
    }
  }, [isEdit]);
  const fileUploaderClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  const addCDetails = () => {
    let data = {
      id: contactDetails[contactDetails.length - 1].id + 1,
      name: "Add Contact Details",
      icon: "bi-geo-alt-fill",
      value: "",
      showIcons: false,
      editText: false,
    };
    setContactDetails((preVal) => {
      return [...preVal, data];
    });
  };
  const changeCNameDetails = (id, value) => {
    setContactDetails((preVal) =>
      preVal.map((x) => (x.id === id ? { ...x, value: value } : x))
    );
  };
  const onChangeEditField = (field) => {
    showContactDetailsField(false);
    setEditField(field);
    onEditSectionClick(availableSection.HEADER);
  };
  const showContactDetailsField = (id, field) => {
    // showIcons
    // editText
    console.log(id, field);
    if (!id) {
      setContactDetails((preVal) =>
        preVal.map((x) => ({ ...x, showIcons: false }))
      );
      return;
    }
    setContactDetails((preVal) =>
      preVal.map((x) =>
        x.id === id ? { ...x, [field]: !x[field] } : { ...x, [field]: false }
      )
    );
  };
  const deleteCDetails = (id) => {
    let data = [...contactDetails];
    let filterData = data.filter((x) => x.id !== id);
    setContactDetails(filterData);
  };
  const iconSelected = (iconId, contactDetailsId) => {
    showContactDetailsField(false);
    let icon = availableIcons.find((x) => x.id === iconId)?.icon;
    if (!icon) {
      return;
    }
    setContactDetails((preVal) =>
      preVal.map((x) => (x.id === contactDetailsId ? { ...x, icon: icon } : x))
    );
  };
  const getWidth = (content) => {
    const maxLength = content.length;
    return `${maxLength * 8 + 4}px`;
  };
  const toggleImage = () => {
    console.log("called");
    setDisplayDetails((preVal) => {
      return { ...preVal, image: !preVal.image };
    });
  };
  const getContactDetails = useMemo(() => {
    if (isEdit) {
      return contactDetails;
    }
    return contactDetails.filter((x) => x.value);
  }, [isEdit, contactDetails]);
  return (
    <div>
      <div className={`t-edit ${editField ? "t-show" : "t-hidden"}`}>
        <i
          className="bi bi-gear c-pointer"
          onClick={() => setOpenSettings(!openSettings)}
        ></i>
        <Dropdown.Menu show={openSettings} className="t-setting-sect">
          <div className="t-sect-list px-4">
            {" "}
            <div>Show Image</div>
            <div>
              <Switch checked={displayDetails.image} onChange={toggleImage} />
            </div>
          </div>
        </Dropdown.Menu>
      </div>

      <div
        className={`t-header-section p-2 ${
          editField ? "t-section-edit" : "t-section"
        }`}
      >
        <div className="t-header-left">
          <div className="t-name-section">
            {editField === availableEditFields.NAME ? (
              <Form.Control
                onChange={changeTemplateDetails}
                plaintext
                name="name"
                placeholder="Your Name"
                className={`t-name t-input t-input-name `}
              />
            ) : (
              <div
                onClick={() => {
                  onChangeEditField(availableEditFields.NAME);
                  setSelectedContactId(0);
                }}
                className={`t-name  ${templateDetails.name ? "" : "o-6"}`}
              >
                {templateDetails.name || "Your Name"}
              </div>
            )}
          </div>
          <div className="t-job-position-section">
            {editField == availableEditFields.ROLE ? (
              <Form.Control
                name="role"
                onChange={changeTemplateDetails}
                plaintext
                placeholder="The role you are applying for ?"
                className="t-role t-input t-input-role"
              />
            ) : (
              <div
                onClick={() => {
                  onChangeEditField(availableEditFields.ROLE);
                  setSelectedContactId(0);
                }}
                className={`t-role  ${templateDetails.role ? "" : "o-6"}`}
              >
                {templateDetails.role || "The role you are applying for ?"}
              </div>
            )}
          </div>
          <div className="t-cDetails-list mt-1 ">
            {/* onClick={() => onChangeEditField(availableEditFields.CONTACT_DETAILS)} */}
            {getContactDetails.map((cDetails, i) => (
              <div
                className={`t-c-details ${
                  selectedContactId === cDetails.id && isEdit
                    ? "t-c-details-select"
                    : ""
                }`}
                key={i}
              >
                {selectedContactId === cDetails.id && isEdit && (
                  <i
                    onClick={() => deleteCDetails(cDetails.id)}
                    className={`bi bi-x-circle-fill t-icon c-pointer t-icon-c-delete`}
                  ></i>
                )}
                <div>
                  <i
                    onClick={() => {
                      setSelectedContactId(cDetails.id);

                      onChangeEditField(
                        availableEditFields.CONTACT_DETAILS_ICONS
                      );
                      showContactDetailsField(cDetails.id, "showIcons");
                    }}
                    className={`bi ${cDetails.icon} t-icon c-pointer`}
                  ></i>
                  {cDetails.showIcons && (
                    <ListGroup className="t-icons-available">
                      {availableIcons.map((availableIcon) => (
                        <i
                          onClick={() => {
                            iconSelected(availableIcon.id, cDetails.id);
                          }}
                          key={availableIcon.id}
                          className={`bi ${availableIcon.icon} c-pointer`}
                        ></i>
                      ))}
                    </ListGroup>
                  )}
                </div>
                <div>
                  {editField == availableEditFields.CONTACT_DETAILS &&
                  cDetails.editText ? (
                    <Form.Control
                      name={cDetails.name}
                      onChange={(e) =>
                        changeCNameDetails(cDetails.id, e.target?.value)
                      }
                      style={{
                        width: getWidth(cDetails.value || cDetails.name),
                      }}
                      plaintext
                      placeholder={cDetails.value || cDetails.name}
                      className="t-input t-input-c-details"
                    />
                  ) : (
                    <div
                      className={cDetails.value ? "t-c-detail-value" : ""}
                      onClick={() => {
                        setSelectedContactId(cDetails.id);
                        showContactDetailsField(cDetails.id, "editText");
                        onChangeEditField(availableEditFields.CONTACT_DETAILS);
                      }}
                    >
                      {cDetails.value || cDetails.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isEdit && (
              <i
                onClick={addCDetails}
                className={`bi bi-plus-circle t-icon c-pointer t-add-icon-details`}
              ></i>
            )}
          </div>
        </div>
        <div
          className={`t-header-right ${avatarShape} d-flex ${
            displayDetails.image ? "t-show" : "t-hidden"
          }`}
        >
          <div className={`t-user-edit-sec ${isEdit ? "t-show" : "t-hidden"}`}>
            {Object.values(availableAvatarShapes).map((x) => (
              <Form.Check
                key={x}
                inline
                name="avatar-img"
                checked={avatarShape === x}
                type="radio"
                onChange={() => setAvatarShape(x)}
              />
            ))}
          </div>
          <div
            className="t-user-image-sec c-pointer"
            onClick={() => onChangeEditField(availableEditFields.USER_IMAGE)}
          >
            <div className="t-image-on-hover">
              <div className="t-image-upload" onClick={fileUploaderClick}>
                <i className="bi bi-upload"></i>
              </div>
              <div className="t-image-hide" onClick={toggleImage}>
                <i className="bi bi-eye-slash"></i>
              </div>
            </div>
            <input
              type="file"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />

            <Image className="t-user-image" src={selectedImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateHeader;
