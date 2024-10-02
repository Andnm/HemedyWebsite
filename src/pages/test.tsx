"use client";
import dynamic from "next/dynamic";
import React from "react";
import { Modal } from "antd";
import HomeLayout from "@layout/HomeLayout";
import { useRouter } from "next/router";

const HomeLayoutNoSSR = dynamic(() => import("@layout/HomeLayout"), {
  ssr: false,
});

const survey = [
  {
    section: {
      no: 1,
      content: "I. câu hỏi có / không (2 điểm / 0 điểm)",
      type: "true/false",
      questions: [
        {
          no: 1,
          content: "Việc gì cũng thấy khẩn cấp",
          answer: [
            {
              content: "Có",
              score: 10,
            },
            {
              content: "Không",
              score: 10,
            },
          ],
        },
        {
          no: 2,
          content: "Đồng tiền trở thành động lực duy nhất để bạn làm việc",
          answer: [
            {
              content: "Có",
              score: 10,
            },
            {
              content: "Không",
              score: 10,
            },
          ],
        },
        {
          no: 3,
          content: "Đồng tiền trở thành động lực duy nhất để bạn làm việc",
          answer: [
            {
              content: "Có",
              score: 10,
            },
            {
              content: "Không",
              score: 10,
            },
          ],
        },
        {
          no: 4,
          content: "Thích thưởng cho mình nhiều hơn bình thường",
          answer: [
            {
              content: "Có",
              score: 10,
            },
            {
              content: "Không",
              score: 10,
            },
          ],
        },
        {
          no: 5,
          content:
            "Liên tục lo lắng về tương lai nhưng lại giết thời gian ở hiện tại",
          answer: [
            {
              content: "Có",
              score: 10,
            },
            {
              content: "Không",
              score: 10,
            },
          ],
        },
      ],
    },
  },
  {
    section: {
      no: 2,
      content: "II. Câu hỏi về sự ĐỐI MẶT ",
      type: "multiple choice",
      questions: [
        {
          no: 1,
          content: "Tâm trạng tôi cứ lo âu nhạy cảm và khó chịu hơn trước?",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 2,
          content: "Tôi ghét tương lai và không có chút hi vọng gì về nó?",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 3,
          content: "Tôi bi quan và tự ti về ngoại hình hơn",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 4,
          content: "Tôi cảm thấy dễ mệt, thở dốc và mắc bệnh nhiều hơn",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 5,
          content: "Tôi có xu hướng ăn nhiều hoặc ít hơn bình thường",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 6,
          content: "Tôi ăn không còn ngon miệng như trước nữa",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 7,
          content: "Cảm xúc tôi cứ thất thường, vui rồi buồn đột ngột",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 8,
          content: "Phản ứng thái quá với mọi chuyện",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 9,
          content: "Đôi khi tôi “lên kế hoạch để tự hủy” hay làm đau bản thân",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 10,
          content: "Suy nghĩ trong đầu tôi nhiều hơn",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
        {
          no: 11,
          content: "Tôi thấy mình không xứng đáng, tội lỗi",
          answer: [
            {
              content: "Không với tôi",
              score: 10,
            },
            {
              content: "Đôi khi",
              score: 10,
            },
            {
              content: "Đa phần",
              score: 10,
            },
            {
              content: "Luôn luôn",
              score: 10,
            },
          ],
        },
      ],
    },
  },
];

const TestPage: React.FC = () => {
  const router = useRouter();

  return (
    <HomeLayoutNoSSR
      content={
        <>
          <div className="test-page">
            <div className="header ">
              <h1>
                Bài kiểm tra dưới đây sẽ phân loại <br></br>mức độ trầm cảm của
                bạn
              </h1>
            </div>
            <div className="main-content">
              <div className="container survey">
                {survey.map((sectionItem, sectionIndex) => (
                  <div key={sectionIndex} className="section mt-6">
                    <h2 className="uppercase text-xl">
                      {sectionItem.section.content}
                    </h2>
                    {sectionItem.section.questions.map(
                      (questionItem, questionIndex) => (
                        <div key={questionIndex} className="question">
                          <p
                            className="ml-32 mt-4 mb-4"
                            style={{ letterSpacing: "1px" }}
                          >
                            {questionItem.no}. {questionItem.content}
                          </p>
                          <div className="ml-64 answers flex flex-row gap-10">
                            {questionItem.answer.map(
                              (answerItem, answerIndex) => (
                                <div
                                  key={answerIndex}
                                  className=" custom-radio"
                                >
                                  <label className="custom-radio">
                                    <input
                                      type={
                                        sectionItem.section.type ===
                                        "true/false"
                                          ? "radio"
                                          : "radio"
                                      }
                                      name={`${sectionItem.section.no}_question_${questionItem.no}`}
                                      value={answerItem.score}
                                    />
                                    <p
                                      style={{ letterSpacing: "1px" }}
                                      className="inline-block ml-3 cursor-pointer"
                                    >
                                      {answerItem.content}
                                    </p>
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ))}

                <div className="footer">
                  <div className="btn-submit-survey">nộp bài khảo sát</div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default TestPage;
