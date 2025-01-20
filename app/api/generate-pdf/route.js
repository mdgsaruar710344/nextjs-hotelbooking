
import { NextResponse } from "next/server"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import {renderToStream} from "@react-pdf/renderer"
import { handleGetBookingById } from "@/app/actions";
import { getBookingById } from "@/app/queries";

const styles = StyleSheet.create({
  page: { padding: 20 },
  section: { margin: 10, padding: 10, border: '1px solid black' },
});


const MyPDFDocument = ({bookingID,hotelId,userId,checkin,checkout,totalPayment,guestsnumber}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Hello, User {userId}  !</Text>
        <Text>Checkin Time: {checkin} .</Text>
        <Text>Checkout Time:{checkout} .</Text>
        <Text>Hotel Id: {hotelId} .</Text>
        <Text>Guests:{guestsnumber} .</Text>
        <Text>Booking Id:{bookingID}.</Text>
        <Text>Total Payment:{totalPayment}.</Text>
        <Text>This PDF was generated server-side using Server Actions.</Text>
      </View>
    </Page>
  </Document>
);

export async function GET(request){

  const { searchParams } = new URL(request.url);
  const bookingId= searchParams.get("bookingId");
  const bookingdata= await getBookingById(bookingId);
  const bookingStringified= JSON.stringify(bookingdata);
  const booking=JSON.parse(bookingStringified);
  const {_id,hotelId,userId,checkin,checkout,totalPayment,guestsnumber}=booking||{};
    console.log('booking data in API',_id,hotelId,userId,checkin,checkout,totalPayment,guestsnumber)
  const pdfBuffer = await renderToStream(<MyPDFDocument bookingID={_id} hotelId={hotelId} userId={userId} checkin={checkin} checkout={checkout} totalPayment={totalPayment} guestsnumber={guestsnumber} />);
   return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      },
  })
}