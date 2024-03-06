import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import {
  RatingBar,
  Img,
  Text,
  Button,
  Heading,
  SelectBox,
  Input,
} from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FramePage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>AssignmentPage</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex flex-row justify-center items-center w-full p-[13px] bg-blue_gray-900">
          <Input
            size="xs"
            name="search"
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e)}
            prefix={
              <Img
                src="images/img_image_blue_gray_600_01.svg"
                alt="IMAGE"
                className="cursor-pointer"
              />
            }
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue1("")}
                  height={24}
                  width={24}
                  fillColor="#626e79ff"
                />
              ) : null
            }
            className="w-[17%] gap-[35px] border-gray-300 border border-solid rounded-lg"
          />
          <div className="flex flex-row justify-between w-[15%] mb-2 ml-[79px]">
            <a href="#" className="mt-px">
              <Text as="p" className="!text-blue_gray-100">
                Categories
              </Text>
            </a>
            <a href="#">
              <Text as="p" className="!text-blue_gray-100">
                Website Builders
              </Text>
            </a>
          </div>
          <a href="#" className="mb-2 ml-[84px] mr-[372px]">
            <Text as="p" className="!text-blue_gray-100">
              Today&#39;s deals
            </Text>
          </a>
        </header>
        <div className="flex flex-col items-end justify-start w-full max-w-[1592px]">
          <div className="h-[2368px] w-full relative">
            <div className="flex flex-col items-center justify-start w-[68%] bottom-0 right-0 left-0 m-auto absolute">
              <div className="h-px w-[96%] bg-gray-300" />
              <div className="h-[1411px] w-[96%] mt-4 bg-gray-50_01" />
              <div className="flex flex-row justify-between items-start w-[96%] mt-[614px] p-2.5 bg-gray-50_01">
                <Text
                  size="2xl"
                  as="p"
                  className="w-[40%] mt-[30px] mb-[33px] !text-blue_gray-600 !leading-[44px]"
                >
                  Sign up and get exclusive special deals
                </Text>
                <div className="flex flex-row justify-center w-[45%] mt-[38px] mr-2.5">
                  <Input name="edittext" className="w-[79%]" />
                  <a
                    href="#"
                    className="flex justify-center items-center w-[97px] h-[52px] px-5 py-[17px] rounded-tr-[12px] rounded-br-[12px] bg-blue-500"
                  >
                    <Text
                      as="p"
                      className="!text-white-A700 tracking-[0.70px] text-center"
                    >
                      Sign Up
                    </Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-row justify-center w-[65%] py-2.5 z-[1] bg-gray-50_01">
                <div className="flex flex-col items-start justify-start w-full mt-[27px] gap-2.5">
                  <Text size="3xl" as="p" className="!text-blue_gray-800">
                    Best Website builders in the US
                  </Text>
                  <div className="h-px w-full bg-gray-300" />
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-center items-center">
                      <Img
                        src="images/img_image_blue_gray_600_01_20x20.svg"
                        alt="image_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Text as="p" className="ml-2">
                        Last Updated
                      </Text>
                      <Text as="p" className="ml-[5px]">
                        -
                      </Text>
                      <Text size="xs" as="p" className="ml-[9px]">
                        February 22, 2020
                      </Text>
                      <Img
                        src="images/img_image_20x20.svg"
                        alt="image_three"
                        className="h-[20px] w-[20px] ml-5"
                      />
                      <Text as="p" className="ml-2">
                        Advertising Disclosure
                      </Text>
                    </div>
                    <SelectBox
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="toprelevant"
                      placeholder="Top Relevant"
                      options={dropDownOptions}
                      className="w-[12%] gap-px text-blue_gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full mt-[-134px] px-14 py-[103px] bg-gray-50_01">
                <div className="flex flex-col items-start justify-start w-[73%] mt-[47px] gap-[25px]">
                  <div className="flex flex-col items-start justify-start w-[79%] ml-[22px] gap-[18px]">
                    <div className="flex flex-row justify-start gap-5">
                      <Text
                        as="p"
                        className="flex justify-center items-center w-[105px] h-[36px] pl-4 pr-[35px] py-[9px] bg-white-A700 rounded-[12px]"
                      >
                        Tools
                      </Text>
                      <Text
                        size="xs"
                        as="p"
                        className="flex justify-center items-center w-[138px] h-[36px] pl-4 pr-[35px] py-2.5 bg-white-A700 rounded-[12px]"
                      >
                        AWS Builder
                      </Text>
                      <Button
                        color="white_A700"
                        size="lg"
                        className="!text-blue_gray-700 min-w-[105px]"
                      >
                        Start Build
                      </Button>
                      <Text
                        size="xs"
                        as="p"
                        className="flex justify-center items-center w-[132px] h-[36px] pl-4 pr-[29px] py-2.5 bg-white-A700 rounded-[12px]"
                      >
                        Build Supplies
                      </Text>
                      <Text
                        as="p"
                        className="flex justify-center items-center w-[126px] h-[36px] pl-4 pr-[35px] py-[9px] bg-white-A700 rounded-[12px]"
                      >
                        Tooling
                      </Text>
                      <Text
                        size="xs"
                        as="p"
                        className="flex justify-center items-center w-[140px] h-[36px] pl-4 pr-[35px] py-2.5 bg-white-A700 rounded-[12px]"
                      >
                        BlueHosting
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-start ml-[5px] gap-3">
                      <Text size="xs" as="p" className="!text-blue_gray-500">
                        Home
                      </Text>
                      <Img
                        src="images/img_vector.svg"
                        alt="vector_one"
                        className="h-[8px] mt-[3px]"
                      />
                      <Text as="p" className="mt-px !text-blue_gray-600">
                        Hosting for all
                      </Text>
                      <Img
                        src="images/img_vector.svg"
                        alt="vector_three"
                        className="h-[8px] mt-[3px]"
                      />
                      <Text as="p" className="mt-px !text-blue_gray-500">
                        Hosting
                      </Text>
                      <Img
                        src="images/img_vector.svg"
                        alt="vector_five"
                        className="h-[8px] mt-[3px]"
                      />
                      <Text as="p" className="mt-px !text-blue_gray-600">
                        Hosting6
                      </Text>
                      <Img
                        src="images/img_vector.svg"
                        alt="vector_seven"
                        className="h-[8px] mt-[3px]"
                      />
                      <Text as="p" className="mt-px !text-blue_gray-600">
                        Hosting5
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col w-[98%] gap-[5px]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Button
                            color="yellow_900"
                            size="md"
                            leftIcon={
                              <Img
                                src="images/img_image_white_a700.svg"
                                alt="IMAGE"
                              />
                            }
                            className="ml-4 gap-2 rounded-tr-lg rounded-br-lg z-[1] min-w-[136px]"
                          >
                            Best Choice
                          </Button>
                          <div className="flex flex-row justify-start items-start w-full mt-[-19px]">
                            <Text
                              size="xl"
                              as="p"
                              className="flex justify-center items-center h-[44px] w-[44px] mt-8 !text-blue_gray-600_01 z-[1] bg-white-A700 text-center rounded-[50%]"
                            >
                              1
                            </Text>
                            <div className="flex flex-row justify-end w-[98%] ml-[-22px] pb-[7px] px-[7px] bg-white-A700 rounded-[12px]">
                              <div className="flex flex-row justify-between items-center w-[95%] mr-[17px]">
                                <div className="flex flex-col items-center justify-start gap-3">
                                  <Img
                                    src="images/img_download_1.png"
                                    alt="builder_one_one"
                                    className="w-full object-cover"
                                  />
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="!text-blue_gray-600_01 text-center"
                                  >
                                    Builder 1
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start items-start w-[80%] gap-[25px]">
                                  <div className="flex flex-col items-start justify-start w-[67%] mt-[21px]">
                                    <Text
                                      size="lg"
                                      as="p"
                                      className="w-[98%] !leading-6"
                                    >
                                      WixPro 72-Inch Responsive Website Builder-
                                      Comprehensive Digital Platform Creation
                                      Tool, Streamlined Design Interface for
                                      Professional Websites and Online Stores
                                      (Black/Blue)
                                    </Text>
                                    <Heading as="h1" className="mt-[7px]">
                                      Main highlights
                                    </Heading>
                                    <Text
                                      size="lg"
                                      as="p"
                                      className="w-[97%] mt-2.5 ml-[18px] !leading-6"
                                    >
                                      [What You Get]: Receive the WixPro website
                                      builder suite, access to premium design
                                      templates, an extensive library of widgets
                                      and apps, and detailed step-by-step
                                      guides.
                                    </Text>
                                    <div className="flex flex-row justify-start items-center mt-6 gap-1">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-blue-500"
                                      >
                                        Show more
                                      </Text>
                                      <Img
                                        src="images/img_arrow_down_blue_500.svg"
                                        alt="show_more_one"
                                        className="h-[16px] w-[16px]"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[31%] mb-[9px] gap-[72px]">
                                    <div className="flex flex-col items-center justify-start w-[59%] p-[3px] rounded-bl-[12px] rounded-br-[12px] bg-gray-50">
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        color="#ffb80f"
                                        activeColor="#babec3"
                                        size={10}
                                        starCount={4}
                                        className="flex justify-between h-[10px] w-[10px]"
                                      />
                                      <Text
                                        size="2xl"
                                        as="p"
                                        className="mt-[-2px] !text-light_blue-900"
                                      >
                                        9.8
                                      </Text>
                                      <Text
                                        as="p"
                                        className="mt-3 !text-light_blue-900"
                                      >
                                        Exceptional
                                      </Text>
                                      <RatingBar
                                        value={1}
                                        isEditable={true}
                                        color="#ffb80f"
                                        activeColor="#babec3"
                                        size={11}
                                        className="flex justify-between w-[66px] mt-2 mb-4"
                                      />
                                    </div>
                                    <Button className="w-full">View</Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Button
                            color="yellow_900"
                            size="md"
                            leftIcon={
                              <Img src="images/img_image.svg" alt="IMAGE" />
                            }
                            className="ml-4 gap-2 rounded-tr-lg rounded-br-lg z-[1] min-w-[125px]"
                          >
                            Best Value
                          </Button>
                          <div className="flex flex-row justify-start items-start w-full mt-[-19px]">
                            <div className="flex flex-col items-center justify-start h-[44px] w-[44px] mt-8 z-[1] border-gray-300 border border-solid bg-white-A700 rounded-[50%]">
                              <div className="flex flex-col items-center justify-start h-[44px] w-[44px] p-[9px] border-gray-300 border border-solid bg-white-A700 rounded-[50%]">
                                <Text
                                  size="xl"
                                  as="p"
                                  className="!text-blue_gray-600_01"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-end w-[98%] ml-[-22px] pb-2.5 px-2.5 bg-white-A700 rounded-[12px]">
                              <div className="flex flex-row justify-between items-center w-[96%] mr-3.5">
                                <div className="flex flex-col items-start justify-start gap-[27px]">
                                  <Img
                                    src="images/img_download_1.png"
                                    alt="downloadseven"
                                    className="w-full object-cover"
                                  />
                                  <Text
                                    as="p"
                                    className="ml-[41px] !text-blue_gray-600_01 text-center"
                                  >
                                    Biulder
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start items-center w-[80%] gap-6">
                                  <div className="flex flex-col items-start justify-start w-[67%]">
                                    <Text
                                      size="lg"
                                      as="p"
                                      className="ml-0.5 !leading-6"
                                    >
                                      SiteCraft 68-Inch Ultimate Web Design
                                      Studio- Advanced Site Creation Toolkit,
                                      Intuitive Drag-and-Drop Editor for Dynamic
                                      Websites and E-commerce Platforms
                                      (Green/White)
                                    </Text>
                                    <Heading as="h2" className="mt-2.5">
                                      Main highlights
                                    </Heading>
                                    <Text
                                      size="lg"
                                      as="p"
                                      className="w-[95%] mt-[11px] ml-[22px] !leading-6"
                                    >
                                      [What You Get]: Gain access to the
                                      SiteCraft design studio, featuring a
                                      robust selection of design elements, SEO
                                      optimization tools, and e-commerce
                                      integrations.
                                    </Text>
                                    <div className="flex flex-row justify-start items-center mt-[17px] ml-[7px] gap-1">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-blue-500"
                                      >
                                        Show more
                                      </Text>
                                      <Img
                                        src="images/img_arrow_down_blue_500.svg"
                                        alt="arrowdown_one"
                                        className="h-[16px] w-[16px]"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[31%] mb-1.5 gap-[72px]">
                                    <div className="flex flex-col items-center justify-start w-[59%] p-[3px] rounded-bl-[12px] rounded-br-[12px] bg-gray-50">
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        color="#ffb80f"
                                        activeColor="#babec3"
                                        size={10}
                                        starCount={4}
                                        className="flex justify-between h-[10px] w-[10px]"
                                      />
                                      <Text
                                        size="2xl"
                                        as="p"
                                        className="mt-[-2px] !text-light_blue-900"
                                      >
                                        9.5
                                      </Text>
                                      <div className="flex flex-col items-center justify-start w-[52%] mt-3 mb-[15px] gap-[9px]">
                                        <Text
                                          as="p"
                                          className="!text-light_blue-900"
                                        >
                                          Excellent
                                        </Text>
                                        <RatingBar
                                          value={1}
                                          isEditable={true}
                                          color="#ffb80f"
                                          activeColor="#babec3"
                                          size={11}
                                          className="flex justify-between w-[66px]"
                                        />
                                      </div>
                                    </div>
                                    <Button className="w-full">View</Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center items-start w-full">
                          <Text
                            size="xl"
                            as="p"
                            className="flex justify-center items-center h-[44px] w-[44px] mt-7 !text-blue_gray-600_01 z-[1] border-gray-300 border border-solid bg-white-A700 text-center rounded-[50%]"
                          >
                            3
                          </Text>
                          <div className="flex flex-row justify-end w-[98%] ml-[-22px] pb-[7px] px-[7px] bg-white-A700 rounded-[12px]">
                            <div className="flex flex-row justify-between items-center w-[95%] mr-[17px]">
                              <div className="flex flex-col items-center justify-start gap-3">
                                <Img
                                  src="images/img_download_1.png"
                                  alt="downloadsix_one"
                                  className="w-full object-cover"
                                />
                                <Text
                                  size="xs"
                                  as="p"
                                  className="!text-blue_gray-600_01 text-center"
                                >
                                  Builder 1
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start items-start w-[80%] gap-[25px]">
                                <div className="flex flex-col items-start justify-start w-[67%] mt-[21px]">
                                  <Text
                                    size="lg"
                                    as="p"
                                    className="w-[98%] !leading-6"
                                  >
                                    WixPro 72-Inch Responsive Website Builder-
                                    Comprehensive Digital Platform Creation
                                    Tool, Streamlined Design Interface for
                                    Professional Websites and Online Stores
                                    (Black/Blue)
                                  </Text>
                                  <Heading as="h3" className="mt-[7px]">
                                    Main highlights
                                  </Heading>
                                  <Text
                                    size="lg"
                                    as="p"
                                    className="w-[97%] mt-2 ml-[18px] !leading-6"
                                  >
                                    [What You Get]: Receive the WixPro website
                                    builder suite, access to premium design
                                    templates, an extensive library of widgets
                                    and apps, and detailed step-by-step guides.
                                  </Text>
                                  <Text
                                    size="lg"
                                    as="p"
                                    className="mt-[26px] !text-blue-500"
                                  >
                                    Show more
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[31%] mb-[9px] gap-[72px]">
                                  <div className="flex flex-col items-center justify-start w-[59%] gap-2.5 p-2.5 rounded-bl-[12px] rounded-br-[12px] bg-gray-50">
                                    <Text
                                      size="2xl"
                                      as="p"
                                      className="!text-light_blue-900"
                                    >
                                      9.3
                                    </Text>
                                    <Text
                                      as="p"
                                      className="!text-light_blue-900"
                                    >
                                      Exceptional
                                    </Text>
                                    <RatingBar
                                      value={1}
                                      isEditable={true}
                                      color="#ffb80f"
                                      activeColor="#babec3"
                                      size={11}
                                      className="flex justify-between w-[66px] mb-2"
                                    />
                                  </div>
                                  <Button className="w-full">View</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[99%] mt-[41px]">
                      <div className="flex flex-row justify-center items-start w-full">
                        <Text
                          size="xl"
                          as="p"
                          className="flex justify-center items-center h-[44px] w-[44px] mt-[33px] !text-blue_gray-600_01 z-[1] border-gray-300 border border-solid bg-white-A700 text-center rounded-[50%]"
                        >
                          4
                        </Text>
                        <div className="flex flex-row justify-end w-[98%] ml-[-14px] p-[9px] bg-white-A700 rounded-[12px]">
                          <div className="flex flex-col items-end justify-start w-[97%] mb-[15px] mr-[9px] gap-1">
                            <div className="flex flex-row justify-between items-start w-[95%] mr-[50px]">
                              <div className="flex flex-row justify-between items-start w-[78%] mt-[22px]">
                                <div className="flex flex-col items-center justify-start mt-[76px] gap-[42px]">
                                  <Img
                                    src="images/img_download_1.png"
                                    alt="downloadtwo_one"
                                    className="w-full object-cover"
                                  />
                                  <Text
                                    as="p"
                                    className="!text-blue_gray-600_01 text-center"
                                  >
                                    CDK
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[74%] mb-[13px]">
                                  <Text
                                    size="lg"
                                    as="p"
                                    className="w-[96%] !leading-6"
                                  >
                                    CDK Resposive Builder: An extensive library
                                    of widgets and apps, and detailed
                                    step-by-step guides
                                  </Text>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="flex justify-center items-center w-[61px] h-[26px] mt-[9px] pt-0.5 pb-[7px] px-[5px] !text-light_blue-900 bg-gray-100 rounded"
                                  >
                                    26% Off
                                  </Text>
                                  <Heading as="h4" className="mt-px ml-1">
                                    Main highlights
                                  </Heading>
                                  <div className="flex flex-row justify-start w-[96%] mt-1 ml-[22px] p-2 bg-red-50 rounded-[12px]">
                                    <div className="flex flex-col items-start justify-start w-[39%] ml-1 gap-2">
                                      <div className="flex flex-row justify-start items-center gap-2">
                                        <Button
                                          color="white_A700"
                                          size="sm"
                                          className="min-w-[40px] rounded"
                                        >
                                          9.9
                                        </Button>
                                        <Text
                                          size="md"
                                          as="p"
                                          className="capitalize"
                                        >
                                          building responsive
                                        </Text>
                                      </div>
                                      <div className="flex flex-row justify-start items-start gap-2">
                                        <Button
                                          color="white_A700"
                                          size="sm"
                                          className="min-w-[40px] rounded"
                                        >
                                          8.9
                                        </Button>
                                        <Text
                                          size="lg"
                                          as="p"
                                          className="mt-[3px] capitalize"
                                        >
                                          Cool
                                        </Text>
                                      </div>
                                      <div className="flex flex-row justify-start items-start gap-2">
                                        <Button
                                          color="white_A700"
                                          size="sm"
                                          className="min-w-[40px] rounded"
                                        >
                                          8.9
                                        </Button>
                                        <Text
                                          size="lg"
                                          as="p"
                                          className="mt-[3px] capitalize"
                                        >
                                          Docs
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[15%] gap-4 p-[7px] rounded-bl-[12px] rounded-br-[12px] bg-gray-50">
                                <Text
                                  size="2xl"
                                  as="p"
                                  className="!text-light_blue-900"
                                >
                                  9.1
                                </Text>
                                <div className="flex flex-col items-start justify-start w-[58%] mb-2.5 gap-2">
                                  <Text as="p" className="!text-light_blue-900">
                                    Very Good
                                  </Text>
                                  <RatingBar
                                    value={1}
                                    isEditable={true}
                                    color="#ffb80f"
                                    activeColor="#babec3"
                                    size={11}
                                    className="flex justify-between w-[66px] ml-1"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[71%] mr-[100px] gap-[9px]">
                              <div className="flex flex-row justify-between items-center w-full">
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-blue_gray-800"
                                >
                                  Why we love it
                                </Text>
                                <RatingBar
                                  value={3}
                                  isEditable={true}
                                  color="#ffb80f"
                                  activeColor="#babec3"
                                  size={10}
                                  starCount={3}
                                  className="flex justify-between h-[10px] w-[10px]"
                                />
                              </div>
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Img
                                  src="images/img_image_blue_50.svg"
                                  alt="image_nine"
                                  className="h-[24px] w-[24px]"
                                />
                                <Text size="md" as="p" className="capitalize">
                                  Documentation
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-between items-center w-[84%]">
                              <div className="flex flex-col items-start justify-start w-[18%] gap-[7px]">
                                <div className="flex flex-col items-start justify-start w-[80%] ml-[29px] gap-1">
                                  <div className="flex flex-row justify-start items-center gap-2">
                                    <Img
                                      src="images/img_image_blue_50.svg"
                                      alt="image_eleven"
                                      className="h-[24px] w-[24px]"
                                    />
                                    <Text
                                      size="lg"
                                      as="p"
                                      className="capitalize"
                                    >
                                      Easy Use
                                    </Text>
                                  </div>
                                  <div className="flex flex-row justify-start items-center gap-2">
                                    <Img
                                      src="images/img_image_blue_50.svg"
                                      alt="image_thirteen"
                                      className="h-[24px] w-[24px]"
                                    />
                                    <Text
                                      size="lg"
                                      as="p"
                                      className="capitalize"
                                    >
                                      Out of box
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-blue-500"
                                >
                                  Show more
                                </Text>
                              </div>
                              <Button className="min-w-[232px]">View</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[85%] mt-[85px]">
                      <Text
                        size="2xl"
                        as="p"
                        className="mb-[7px] !text-blue_gray-800"
                      >
                        Related deals you might like for
                      </Text>
                      <RatingBar
                        value={4}
                        isEditable={true}
                        color="#ffb80f"
                        activeColor="#babec3"
                        size={10}
                        starCount={4}
                        className="flex justify-between h-[10px] w-[10px] mt-9"
                      />
                    </div>
                    <div className="flex flex-row w-[97%] mt-3.5 gap-[22px]">
                      <div className="flex flex-col items-center justify-start w-[33%] mt-[13px] gap-[59px] p-5 bg-white-A700 rounded-[12px]">
                        <Img
                          src="images/img_download_1.png"
                          alt="downloadthree"
                          className="w-[49%] mt-[17px] object-cover"
                        />
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row justify-start gap-1">
                              <Button
                                color="gray_100"
                                size="xs"
                                className="min-w-[69px] rounded-lg"
                              >
                                20% Off
                              </Button>
                              <Button
                                color="gray_100"
                                size="xs"
                                className="min-w-[107px] rounded-lg"
                              >
                                Limited time{" "}
                              </Button>
                            </div>
                            <Heading
                              as="h5"
                              className="mt-1.5 ml-[67px] !text-blue_gray-600_01"
                            >
                              Webbuilder 1
                            </Heading>
                            <Text
                              size="lg"
                              as="p"
                              className="w-[98%] mt-[9px] !text-blue_gray-600_01 !leading-6"
                            >
                              Computer Modern clasic with wix support
                            </Text>
                            <div className="flex flex-row justify-start items-end mt-[7px] gap-[13px]">
                              <Text
                                size="xl"
                                as="p"
                                className="mb-px !text-blue_gray-600"
                              >
                                $39.96
                              </Text>
                              <Text
                                as="p"
                                className="mb-px !text-blue_gray-300"
                              >
                                $49.96
                              </Text>
                              <Text size="xs" as="p" className="!text-red-400">
                                (20% Off)
                              </Text>
                            </div>
                            <div className="h-[48px] w-full mt-[13px] bg-blue-500 rounded-[12px]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[33%] mt-2.5 mb-[3px] p-5 bg-white-A700 rounded-[12px]">
                        <div className="flex flex-col items-center justify-start w-full mt-[17px] gap-[59px]">
                          <Img
                            src="images/img_download_1.png"
                            alt="downloadfour"
                            className="w-[49%] object-cover"
                          />
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row justify-start gap-1">
                              <Button
                                color="gray_100"
                                size="xs"
                                className="min-w-[69px] rounded-lg"
                              >
                                20% Off
                              </Button>
                              <Button
                                color="gray_100"
                                size="xs"
                                className="min-w-[107px] rounded-lg"
                              >
                                Limited time{" "}
                              </Button>
                            </div>
                            <Heading
                              as="h6"
                              className="mt-1.5 ml-[67px] !text-blue_gray-600_01"
                            >
                              Webbuilder 1
                            </Heading>
                            <Text
                              size="lg"
                              as="p"
                              className="w-[98%] mt-[9px] !text-blue_gray-600_01 !leading-6"
                            >
                              Computer Modern clasic with wix support
                            </Text>
                            <div className="flex flex-row justify-start items-end mt-[7px] gap-[13px]">
                              <Text
                                size="xl"
                                as="p"
                                className="mb-px !text-blue_gray-600"
                              >
                                $39.96
                              </Text>
                              <Text
                                as="p"
                                className="mb-px !text-blue_gray-300"
                              >
                                $49.96
                              </Text>
                              <Text size="xs" as="p" className="!text-red-400">
                                (20% Off)
                              </Text>
                            </div>
                            <Button className="w-full mt-[13px]">
                              View Deal
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[33%] mb-[13px] gap-[59px] p-5 bg-white-A700 rounded-[12px]">
                        <Img
                          src="images/img_download_1.png"
                          alt="downloadfive"
                          className="w-[49%] mt-[17px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                          <div className="flex flex-row justify-center w-[98%]">
                            <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                              <div className="flex flex-row justify-start gap-1">
                                <Button
                                  color="gray_100"
                                  size="xs"
                                  className="min-w-[69px] rounded-lg"
                                >
                                  20% Off
                                </Button>
                                <Button
                                  color="gray_100"
                                  size="xs"
                                  className="min-w-[107px] rounded-lg"
                                >
                                  Limited time{" "}
                                </Button>
                              </div>
                              <Heading
                                as="h6"
                                className="ml-[67px] !text-blue_gray-600_01"
                              >
                                Webbuilder 1
                              </Heading>
                              <Text
                                size="lg"
                                as="p"
                                className="!text-blue_gray-600_01 !leading-6"
                              >
                                Computer Modern clasic with wix support
                              </Text>
                              <div className="flex flex-row justify-start items-end gap-[13px]">
                                <Text
                                  size="xl"
                                  as="p"
                                  className="mb-px !text-blue_gray-600"
                                >
                                  $39.96
                                </Text>
                                <Text
                                  as="p"
                                  className="mb-px !text-blue_gray-300"
                                >
                                  $49.96
                                </Text>
                                <Text
                                  size="xs"
                                  as="p"
                                  className="!text-red-400"
                                >
                                  (20% Off)
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full">View Deal</Button>
                        </div>
                      </div>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#ffb80f"
                      activeColor="#babec3"
                      size={10}
                      starCount={4}
                      className="flex justify-between h-[10px] w-[10px] mt-[88px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex flex-col w-full">
            <Text
              size="lg"
              as="p"
              className="mt-[30px] ml-[442px] !text-white-A700 text-center"
            >
              View Deal
            </Text>
            <div className="flex flex-row justify-end items-center h-[8px] w-[8px] mb-[115px] mr-[401px]">
              <div className="flex flex-col items-center justify-start h-[8px] w-[8px]">
                <div className="flex flex-row justify-center items-start h-[8px] w-[8px] z-[1]">
                  <div className="h-[8px] w-[8px] z-[1] relative">
                    <Img
                      src="images/img_vector_gray_400.svg"
                      alt="vector_nine"
                      className="justify-center h-[8px] w-[8px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <Img
                      src="images/img_vector_gray_400_3x1.svg"
                      alt="vector_eleven"
                      className="h-[3px] bottom-[23%] right-0 left-0 m-auto absolute"
                    />
                  </div>
                  <Img
                    src="images/img_vector_gray_400_1x1.svg"
                    alt="vector_thirteen"
                    className="h-px w-px mt-px ml-[-4px]"
                  />
                </div>
                <Img
                  src="images/img_vector_gray_400_1x2.svg"
                  alt="vector_fifteen"
                  className="h-px w-[2px] mt-[-2px]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start w-full p-14 bg-blue_gray-900">
              <div className="flex flex-col items-start justify-start w-[57%] mb-[145px] ml-[227px] gap-[13px]">
                <div className="flex flex-row justify-between w-[50%]">
                  <Text
                    size="lg"
                    as="p"
                    className="mt-px !text-white-A700 uppercase"
                  >
                    Categories
                  </Text>
                  <Text size="lg" as="p" className="!text-white-A700 uppercase">
                    Contact
                  </Text>
                </div>
                <div className="flex flex-row justify-start items-start w-full">
                  <ul className="flex flex-col items-start justify-start w-[15%] mt-[3px] gap-[23px]">
                    <li>
                      <a href="#">
                        <Text size="xs" as="p" className="!text-blue_gray-200">
                          Web Builder
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="xs" as="p" className="!text-blue_gray-200">
                          Hosting
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-blue_gray-200">
                          Data Center
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="xs" as="p" className="!text-blue_gray-200">
                          Robotic-Automation
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-start w-[14%] ml-[217px] gap-[19px]">
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-blue_gray-200">
                          Contact
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-blue_gray-200">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-blue_gray-200">
                          Terms Of Service
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="xs" as="p" className="!text-blue_gray-200">
                          Categories
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-blue_gray-200">
                          About
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-row justify-start items-center w-[14%] mt-[31px] ml-[273px] gap-4">
                    <Text size="xs" as="p" className="!text-blue_gray-100">
                      United States
                    </Text>
                    <Img
                      src="images/img_arrow_down_gray_300.svg"
                      alt="arrowdown_one"
                      className="h-[9px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <RatingBar
            value={4}
            isEditable={true}
            color="#ffb80f"
            activeColor="#babec3"
            size={10}
            starCount={4}
            className="flex justify-between h-[10px] w-[10px] mt-[150px] mr-[400px]"
          />
        </div>
      </div>
    </>
  );
}
