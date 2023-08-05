"use client";
import React, { useContext, useMemo, useEffect } from "react";
import { getDocument, getDocumentByDomain } from "./Utils/getData";

import { AppContext } from "./Utils/context/AppContext";
import LoadingPage from "./post/loading";
import CategoryCard from "./post/CategoryCard";
import PostList from "./post/PostList";

const Page = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const url = "http://localhost:3000"; // replace with your actual url

    // Using Javascript fetch api
    //   fetch('api/courses', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ url }),
    //   }).then(response =>
    //     response.json()
    //   ).then(data =>
    //     console.log('irl ',data)
    //   ).catch((error) =>
    //     console.error('Error fff  :', error)
    //   );
  }, []);

  useMemo(() => {
    dispatch({ type: "SET_NCATEGORY", payload: [...new Set(state.category)] });
  }, [state.category]);

  useMemo(() => {
    const fetchData = async () => {
      const url = "http://localhost:3000";
      // const url = window.location.origin;
      const { workspaceData, error1 } = await getDocumentByDomain(
        "workspaces",
        url
      );

      if (error1) {
        console.error("Failed to fetch workspace data:", error1);
      } else {
        // Note: This assumes the document data is in the format you want for your workspace data.
        dispatch({ type: "SET_WORKSPACE_DATA", payload: workspaceData });
      }

      console.log("workspaceData ", workspaceData);
      const collection = "notion_documents";
      const id = "b5ff024c-82e0-4965-ac4a-6154f356a4dfWXt2w";

      var { result, error } = await getDocument(collection, id);

      if (error) {
        dispatch({
          type: "SET_ERROR",
          payload: "Error loading document:" + error,
        });
        dispatch({ type: "SET_LOADING_DATA", payload: false });
        return;
      }

      if (!result.exists) {
        dispatch({ type: "SET_ERROR", payload: "No such document!" });
      } else {
        const data = result.data();
        dispatch({
          type: "SET_CATEGORY",
          payload: data.pages.map((page) => page.Category),
        });
        dispatch({ type: "SET_DOCUMENT_DATA", payload: data });
      }

      dispatch({ type: "SET_LOADING_DATA", payload: false });

      var { result, error } = await getDocument(
        "webDesign",
        "prj_5dzM5DJlGWMRX4J2SlECFlpr9CfQ"
      );

      if (!result) {
        dispatch({
          type: "SET_ERROR",
          payload: "Error loading Design:" + error,
        });
        dispatch({ type: "SET_LOADING_DATA", payload: false });
        return;
      }

      if (!result.exists) {
        dispatch({ type: "SET_ERROR", payload: "No such document!" });
      } else {
        dispatch({ type: "SET_DESIGN", payload: result.data() });
      }

      // fetch("api/courses")
      //   .then((data) => {
      //     // Iterate over the workspaceData fields and update the corresponding fields in the data
      //     for (const field in workspaceData) {
      //       if (data.site_info.hasOwnProperty(field)) {
      //         data.site_info[field] = workspaceData[field];
      //       }
      //     }

      //     // Update the site_info section
      //     for (const field in workspaceData.site_info) {
      //       if (data.site_info.hasOwnProperty(field)) {
      //         data.site_info[field] = workspaceData.site_info[field];
      //       }
      //     }

      //     // Update the seo section

      //     for (const field in workspaceData.seoData) {
      //       if (data.seoData.hasOwnProperty(field)) {
      //         data.seoData[field] = workspaceData.seoData[field];
      //       }
      //     }

      //     // Update the header_links section
      //     if (
      //       workspaceData.header_links &&
      //       Array.isArray(workspaceData.header_links)
      //     ) {
      //       data.header_links = workspaceData.header_links;
      //     }

      //     // Update the footer_links section
      //     if (
      //       workspaceData.footer_links &&
      //       Array.isArray(workspaceData.footer_links)
      //     ) {
      //       data.footer_links = workspaceData.footer_links;
      //     }

      //     // Update the social_links section
      //     if (
      //       workspaceData.social_links &&
      //       Array.isArray(workspaceData.social_links)
      //     ) {
      //       data.social_links = workspaceData.social_links;
      //     }

      //     // Update the hero section
      //     for (const field in workspaceData.hero) {
      //       if (data.hero.hasOwnProperty(field)) {
      //         data.hero[field] = workspaceData.hero[field];
      //       }
      //     }

      //     // Update the top_clients section
      //     if (
      //       workspaceData.top_clients &&
      //       Array.isArray(workspaceData.top_clients)
      //     ) {
      //       data.top_clients = workspaceData.top_clients;
      //     }

      //     // Update the abovefooter section
      //     for (const field in workspaceData.abovefooter) {
      //       if (data.abovefooter.hasOwnProperty(field)) {
      //         data.abovefooter[field] = workspaceData.abovefooter[field];
      //       }
      //     }

      //     // Update the footer section
      //     for (const field in workspaceData.footer) {
      //       if (data.footer.hasOwnProperty(field)) {
      //         data.footer[field] = workspaceData.footer[field];
      //       }
      //     }

      //     // Update the exit_intent section
      //     for (const field in workspaceData.exit_intent) {
      //       if (data.exit_intent.hasOwnProperty(field)) {
      //         data.exit_intent[field] = workspaceData.exit_intent[field];
      //       }
      //     }

      //     // Update the embeds section
      //     for (const field in workspaceData.embeds) {
      //       if (data.embeds.hasOwnProperty(field)) {
      //         data.embeds[field] = workspaceData.embeds[field];
      //       }
      //     }

      //     // Update the aichat section
      //     for (const field in workspaceData.aichat) {
      //       if (data.aichat.hasOwnProperty(field)) {
      //         data.aichat[field] = workspaceData.aichat[field];
      //       }
      //     }

      //     // Update the code_injections section
      //     for (const field in workspaceData.code_injections) {
      //       if (data.code_injections.hasOwnProperty(field)) {
      //         data.code_injections[field] =
      //           workspaceData.code_injections[field];
      //       }
      //     }

      //     console.log("updated data:", data);
      //     console.log("Designresult", result.data());
      //   })
      //   .catch((error) => console.error("Error:", error));
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category });
    dispatch({ type: "SET_VIEW", payload: "articles" });
  };

  const handleBackClick = () => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: null });
    dispatch({ type: "SET_VIEW", payload: "categories" });
  };

  const filteredDocuments = useMemo(() => {
    if (!state.selectedCategory || !state.documentData) return [];

    return state.documentData.pages.filter(
      (page) => page.Category === state.selectedCategory
    );
  }, [state.selectedCategory, state.documentData]);

  if (state.loadingData) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  if (state.error) {
    return <div>{state.error}</div>;
  }

  if (state.view === "categories") {
    return (
      <section className='p-5 categoryhome'>
        <div className='container'>
          <div
            className='row d-flex flex-wrap justify-content-center'
            data-aos='fade-up'
          >
            <div className='gap-4 d-flex flex-wrap justify-content-center mb-4'>
              {state.Ncategory.map((item, index) => (
                <CategoryCard
                  key={index}
                  iconUrl='https://fonts.gstatic.com/s/i/productlogos/chrome/v7/web-64dp/logo_chrome_color_1x_web_64dp.png'
                  title={item}
                  description=''
                  articleCount={1}
                  clickfun={handleCategoryClick}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <PostList
        filteredDocuments={filteredDocuments}
        selectedCategory={state.selectedCategory}
        handleBackClick={handleBackClick}
      />
    );
  }
};

export default Page;

// export async function fetchRepos() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts',
//   {
//     next: {
//       revalidate: 60,
//     },
//   })
//   return await res.json()
// }

// export default async function Page() {
//   const repos = await fetchRepos();

//   return (
//     <div>
//       <h1>List of Posts</h1>
//       {repos.map((post) => (
//         <div key={post.id}>
//           <h2 style={{
//             background:"black",
//             color:"white",
//             padding:"2px 15px"

// }} >{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   )
// /}
