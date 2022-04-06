import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import { fetchAllBooks, selectBooks } from '../../redux/slices/booksSlices';

// title(pin):"Unlocking Android: A Developer's Guide"
// isbn(pin):"1933988673"
// pageCount(pin):416
// thumbnailUrl(pin):"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
// shortDescription(pin):"Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout."
// longDescription(pin):"Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience. Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small. Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones. WHAT'S INSIDE: * Android's place in the market * Using the Eclipse environment for Android development * The Intents - how and why they are used * Application classes: o Activity o Service o IntentReceiver * User interface design * Using the ContentProvider to manage data * Persisting data with the SQLite database * Networking examples * Telephony applications * Notification methods * OpenGL, animation & multimedia * Sample Applications "
// status(pin):"PUBLISH"

const Home = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  const renderCard = () => {
    return books?.value?.map(
      ({
        title,
        isbn,
        pageCount,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories,
        publishedDate,
      }, index) => {
        return (
          <Card
            key={index}
            title={title}
            isbn={isbn}
            pageCount={pageCount}
            thumbnailUrl={thumbnailUrl}
            shortDescription={shortDescription}
            longDescription={longDescription}
            status={status}
            authors={authors}
            categories={categories}
            publishedDate={publishedDate}
          />
        );
      }
    );
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-24">
        <div className="columns-4 gap-8">{renderCard()}</div>
      </div>
    </>
  );
};

export default Home;
