import { useNavigate } from "react-router-dom";

const SignupModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleStudentClick = () => {
    navigate("/signup/student");
    onClose();
  };

  const handleStaffClick = () => {
    navigate("/signup/staff");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "40px",
          borderRadius: "12px",
          maxWidth: "600px",
          width: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Choose Account Type
        </h2>
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Student Option */}
          <div
            onClick={handleStudentClick}
            style={{
              cursor: "pointer",
              padding: "30px",
              border: "2px solid #646cff",
              borderRadius: "12px",
              textAlign: "center",
              transition: "transform 0.2s, border-color 0.2s",
              flex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.borderColor = "#535bf2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "#646cff";
            }}
          >
            <div style={{ fontSize: "60px", marginBottom: "15px" }}>🎓</div>
            <h3>Student</h3>
            <p style={{ fontSize: "14px", color: "#888" }}>
              Borrow books and manage your reading list
            </p>
          </div>

          {/* Staff Option */}
          <div
            onClick={handleStaffClick}
            style={{
              cursor: "pointer",
              padding: "30px",
              border: "2px solid #646cff",
              borderRadius: "12px",
              textAlign: "center",
              transition: "transform 0.2s, border-color 0.2s",
              flex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.borderColor = "#535bf2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "#646cff";
            }}
          >
            <div style={{ fontSize: "60px", marginBottom: "15px" }}>📚</div>
            <h3>Staff</h3>
            <p style={{ fontSize: "14px", color: "#888" }}>
              Manage library books and records
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "12px",
            backgroundColor: "#6c757d",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
