import { AirlineIcon, LocationIcon, PlaneIcon, VectorIcon, WarningIcon } from "@/components/Icons"
import { FC, ReactElement } from "react"

type FlightContentRightType = {
    head: string;
    title: string;
}
const FlightContent: FC<FlightContentRightType> = ({ head, title }) => {
    return (
        <div>
            <h1 className=" font-semibold ">{head}</h1>
            <p className=" text-sm text-gray-500">{title}</p>
        </div>
    )
}

type FlightJourneyContentType = {
    plane_name: string;
    flight_no: string;
    plane_industry: string;
    plane_class: string;
    children?: ReactElement;
}

const FlightJourneyContent: FC<FlightJourneyContentType> = ({ plane_name, flight_no, plane_industry, plane_class, children }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-x-3">
                <div>
                    <h1 className="capitalize text-gray-600 font-[475]">{plane_name}</h1>
                    <p className=" text-sm text-gray-500">Flight no : {flight_no}</p>
                </div>

                <div>
                    <h1 className=" text-gray-500 capitalize">{plane_industry}</h1>
                    <p className="text-sm text-gray-500">Class : <span className=" uppercase font-medium">{plane_class}</span></p>
                </div>

                <div></div>
            </div>
            {children}
        </>
    )
}


const Card = () => {
    return (
        <>
            <section className=" p-4 flex items-center gap-x-4 border-b border-gray-200">
                <div className=" bg-blue-500 rounded-full min-w-6 min-h-6 text-center text-white ml-1">1</div>
                <div className="grid justify-start gap-x-4 w-full">
                    <p className=" text-lg font-semibold">DAC → JFK</p>
                    <p className=" text-[13px] text-gray-500 text-center">
                        Round Trip <span className="my-auto relative font-bold bottom-1">.</span> 25 Mar - 4 Apr 2023 <span className="my-auto relative font-bold bottom-1">.</span> 1 Stop
                    </p>
                </div>
                <div className="bg-[#ebf0f5] text-blue-600 rounded-[24px] py-1 px-2 text-xs min-w-fit">
                    33h 20m
                </div>
            </section>


            <section className=" p-4 w-full ">

                {/* flight from location */}
                <section className=" flex gap-x-3">
                    <div className=" my-auto">
                        <LocationIcon />
                    </div>
                    <div className=" text-[13px] flex justify-between w-full px-4 py-3 bg-[#F5F7FA] rounded-md">
                        <p className=" font-[475]" >Departure from Dhaka</p>
                        <p className=" text-gray-500"><span className=" font-semibold">Terminal 1:</span> Hazrat Shahjalal International Airport</p>
                    </div>
                </section>

                {/* flight airlines */}
                <section className=" pt-3 flex gap-x-3">
                    <div className="my-auto">
                        <AirlineIcon />
                    </div>
                    <div className="grid grid-cols-3 gap-x-3 w-full">
                        <FlightContent head='DAC - DXB' title='12 hr 20 min' />
                        <FlightContent head='07:30 PM' title='28 Mar, Friday' />
                        <FlightContent head='08:50 AM' title='29 Mar, Saturday' />
                    </div>
                </section>

                <section className="flex gap-x-3">

                    <div className="relative flex justify-center h-auto ">
                        <div className="my-auto bg-white z-10"><PlaneIcon /></div>
                        <div className="absolute h-full w-[2px] bg-gray-300"></div>
                    </div>

                    <div className="py-4">
                        <FlightJourneyContent plane_name={'Turkish Airlines'} flight_no={'TUR467'} plane_industry={'Airbus Industrie 737-800-738'} plane_class={'ECONOMY-Y (O)'} >
                            <div className="p-2 rounded-md bg-orange-100 flex gap-x-2 mt-4 border border-orange-200">
                                <div className="p-2">
                                    <WarningIcon />
                                </div>
                                <p className=" text-xs my-auto text-gray-700">
                                    Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality
                                </p>
                            </div>
                        </FlightJourneyContent>
                    </div>
                </section>

                {/* flight mid location */}
                <section className=" flex gap-x-3">
                    <div className=" my-auto">
                        <LocationIcon />
                    </div>
                    <div className=" text-[13px] flex justify-between w-full px-4 py-3 bg-[#E8F3FF] rounded-md">
                        <p className=" font-[475]">Layover at Dubai: 12 hr 20 min </p>
                        <p className=" text-gray-500">Dubai International Airport</p>
                    </div>
                </section>

                {/* flight airlines */}
                <section className=" pt-3 flex gap-x-3">
                    <div className="my-auto">
                        <AirlineIcon />
                    </div>
                    <div className="grid grid-cols-3 gap-x-3 w-full">
                        <FlightContent head='DAC - DXB' title='12 hr 20 min' />
                        <FlightContent head='07:30 PM' title='28 Mar, Friday' />
                        <FlightContent head='08:50 AM' title='29 Mar, Saturday' />
                    </div>
                </section>

                <section className="flex gap-x-3">
                    <div className="relative flex justify-center h-auto ">
                        <div className="my-auto bg-white z-10"><PlaneIcon /></div>
                        <div className="absolute h-full w-[2px] bg-gray-300"></div>
                    </div>

                    <div className="py-4">
                        <FlightJourneyContent plane_name={'Turkish Airlines'} flight_no={'TUR467'} plane_industry={'Airbus Industrie 737-800-738'} plane_class={'ECONOMY-Y (O)'} >
                        </FlightJourneyContent>
                    </div>
                </section>


                {/* flight destination location */}
                <section className=" flex gap-x-3">
                    <div className=" my-auto">
                        <LocationIcon color="#1882FF" />
                    </div>
                    <div className=" text-[13px] flex justify-between w-full px-4 py-3 bg-[#F5F7FA] rounded-md">
                        <p className=" font-[475]">Destination at New York</p>
                        <p className=" text-gray-500"><span className=" font-semibold">Terminal 4:</span> John F Kennedy International Airport</p>
                    </div>
                </section>
            </section >
        </>
    )
}

const RightContent = () => {
    return (
        <div className="flex flex-col gap-y-5 w-full">
            {/* page paths*/}
            <section className=" flex gap-x-1 text-[13px] justify-start items-center text-gray-500 h-fit">
                <span>Home</span>
                <VectorIcon />
                <span>Booking History</span>
                <VectorIcon />
                <span>Flight</span>
                <VectorIcon />
                <span className=" text-blue-600">STFL17121182045413</span>
            </section>

            {/* flight card  */}
            <section className=" w-full h-full rounded-lg bg-white shadow[0px 2px 8px 0px #0000000A]">
                <Card />
            </section>
        </div>
    )
}


export default RightContent;