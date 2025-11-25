import { useState } from "react";
import { Upload } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function SignUpPage() {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolType: "",
    schoolCategory: "",
    schoolEmail: "",
    password: "",
    confirmPassword: "",
    adminName: "",
    phoneNumber: "",
    role: "",
    agreeToTerms: false,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    console.log(selectedFile);
    // Handle form submission logic here
  };

  const [ShowPassword, SetShowPassword] = useState(false);
  const [ShowConfirmPsw, SetShowConfirmPsw] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 to-red-800 text-white py-4 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center tracking-wide">
            EDUHIVE SCHOOL MANAGEMENT SYSTEM
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Section - Welcome Card */}
            <div className="flex items-center justify-center lg:sticky lg:top-8">
              <div className="bg-transparent rounded-lg  p-8 md:p-12 max-w-md w-full ">
                <div className="space-y-6">
                  {/* Illustration */}
                  <div className=" md:h-[18rem]">
                    <img
                      src="https://res.cloudinary.com/dp75oveuw/image/upload/v1764003560/59362b9297a44a556f48298aee9215d00f50b95a_rl3lr6.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>

                  {/* Welcome Text */}
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-[2.5rem] leading-10 font-bold text-gray-800">
                      Welcome to
                      <br />
                      EduHive
                    </h2>
                    {/* <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg">
                      <span className="text-xl md:text-4xl font-bold">
                        Eduhive
                      </span>
                    </div> */}
                    <h3 className="text-xl md:text-[2.5rem] leading-10 font-bold text-gray-800 pt-2">
                      School
                      <br />
                      Management
                      <br />
                      System
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Sign Up Form */}
            <div className="bg-transparent rounded-lg  p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-red-800 text-center mb-8">
                SIGN UP NOW
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* School Name */}
                <div>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="School Name : "
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* School Type */}
                <div>
                  <input
                    type="text"
                    name="schoolType"
                    placeholder="School Type"
                    value={formData.schoolType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* School Category */}
                <div>
                  <input
                    type="text"
                    name="schoolCategory"
                    placeholder="School Category"
                    value={formData.schoolCategory}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* School Email */}
                <div>
                  <input
                    type="email"
                    name="schoolEmail"
                    placeholder="School Email"
                    value={formData.schoolEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="w-full px-3 py-3 flex justify-between items-center bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400">
                    <input
                      type={ShowPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="border-none outline-none h-full w-[90%]"
                    />
                    {ShowPassword ? (
                      <FaEye
                        className="text-xl  text-gray-700"
                        onClick={() => SetShowPassword(!ShowPassword)}
                      />
                    ) : (
                      <FaEyeSlash
                        className="text-xl  text-gray-700"
                        onClick={() => SetShowPassword(!ShowPassword)}
                      />
                    )}
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <div className="w-full px-3 py-3 flex justify-between bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400">
                    <input
                      type={ShowConfirmPsw ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="border-none outline-none h-full w-[90%]"
                    />
                    {ShowConfirmPsw ? (
                      <FaEye
                        className="text-xl  text-gray-700"
                        onClick={() => SetShowConfirmPsw(!ShowConfirmPsw)}
                      />
                    ) : (
                      <FaEyeSlash
                        className="text-xl text-gray-700"
                        onClick={() => SetShowConfirmPsw(!ShowConfirmPsw)}
                      />
                    )}
                  </div>
                </div>

                {/* School Admin/Business Manager Name */}
                <div>
                  <input
                    type="text"
                    name="adminName"
                    placeholder="School Admin/Business Manager Name (Optional)"
                    value={formData.adminName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* School Phone Number */}
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="School Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* Role */}
                <div>
                  <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-gray-500">
                      {selectedFile ? selectedFile.name : "Attach Logo"}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="px-4 py-1 bg-gray-600 text-white rounded text-sm">
                        Upload
                      </span>
                      <Upload className="w-4 h-4 text-gray-600" />
                    </div>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2 pt-2">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-red-800 border-gray-300 rounded focus:ring-red-800"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-sm text-gray-600"
                  >
                    Do you agree with our terms of service, conditions and
                    privacy policy?
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-900 to-red-800 text-white py-3 px-6 rounded-md font-semibold hover:from-red-800 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    ENTER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
