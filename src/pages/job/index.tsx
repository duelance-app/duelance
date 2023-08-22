import { useEffect, useState } from "react"
import type { NextPage } from "next"
import { Button, FileInput, TextInput, Textarea } from "@mantine/core"
import {
    IconCurrencyDollar,
    IconHourglass,
    IconUpload,
} from "@tabler/icons-react"
import { z } from "zod"

import { useZodForm } from "@/lib/utils/ZodForm"
import { api } from "@/lib/utils/api"

const questions = [
    {
        q: "What kind of freelancer are you looking to hire?",
        a: ["Copywriter", "Content Writer", "Content Editor"],
    },
    {
        q: "What's the scope of your project?",
        a: ["One-time project", "Long-term"],
    },
    {
        q: "What level of experience are you looking for?",
        a: ["Beginner", "Intermediate", "Expert"],
    },
    {
        q: "When do you plan to start?",
        a: [
            "Within the next 3 days",
            "Within the next week",
            "Within the next 2 weeks",
            "After 2 weeks",
        ],
    },
    {
        q: "Please provide any project/work related details",
        type: "details",
    },
    {
        q: "Upload any files that will help us understand your project better",
        type: "files",
    },
]

const oneTimeQuestion = {
    q: "What's your budget?",
    type: "input",
    symbol: "money",
}

const longTermQuestions = [
    {
        q: "What's the contract duration",
        if: "Long-term",
        type: "input",
    },
    {
        q: "What's your budget?",
        if: "Long-term",
        type: "input",
        symbol: "money",
    },
]

const Job: NextPage = () => {
    const formSchema = z.array(
        z.object({
            a: z.string(),
        }) &&
        z.object({ title: z.string(), details: z.string() }) &&
        z.object({ files: z.any() })
    )

    const { register, handleSubmit } = useZodForm({ schema: formSchema })
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [details, setDetails] = useState<{ title: string; details: string }>({
        title: "",
        details: "",
    })
    const [files, setFiles] = useState<File[]>([])
    const [budget, setBudget] = useState<string>("")
    const [answers, setAnswers] = useState<
        | [
              { a: string },
              { a: string },
              { a: string },
              { a: string },
              { title: string; details: string },
              { files: File[] },
              { a: string },
              { a: string }?
          ]
    >([
        { a: "" },
        { a: "" },
        { a: "" },
        { a: "" },
        { title: "", details: "" },
        { files: files },
        { a: "" },
        { a: "" },
    ])

    useEffect(() => {
        console.log(answers)
    }, [answers])
    return (
        <main className="mt-[15%] flex h-full items-center justify-center">
            <div className="m-4 flex w-[50%] flex-col items-center justify-start place-self-center rounded-lg bg-white px-8 py-2">
                {(answers[1]?.a === "One-time project" &&
                    answers.length === 7) ||
                answers.length === 8 ? (
                    <></>
                ) : (
                    <div className="flex flex-row items-center gap-4">
                        <p className="place-self-start text-3xl text-gray-600">
                            {currentQuestion + 1}.
                        </p>
                        <div className="flex flex-col items-start gap-2">
                            <h1 className="text-3xl font-medium">
                                {questions[currentQuestion]?.q}
                            </h1>
                            <div className="flex w-full flex-col">
                                {questions[currentQuestion]?.type ===
                                "details" ? (
                                    <div className="flex h-auto w-full flex-col gap-2">
                                        <TextInput
                                            placeholder="Project Title"
                                            size="md"
                                            withAsterisk
                                            value={details.title}
                                            onChange={(e) =>
                                                setDetails({
                                                    title: e.target.value,
                                                    details: details.details,
                                                })
                                            }
                                        ></TextInput>
                                        <Textarea
                                            placeholder="Project Details"
                                            size="md"
                                            minRows={4}
                                            autosize
                                            withAsterisk
                                            value={details.details}
                                            onChange={(e) => {
                                                setDetails({
                                                    title: details.title,
                                                    details: e.target.value,
                                                })
                                            }}
                                        ></Textarea>

                                        <Button
                                            className="place-self-end bg-gray-600 text-sm hover:border-black hover:bg-white hover:text-black"
                                            onClick={() => {
                                                setAnswers((answers) => [
                                                    ...answers,
                                                    { details },
                                                ])
                                                setCurrentQuestion(
                                                    (currentQuestion) =>
                                                        currentQuestion + 1
                                                )
                                            }}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                ) : questions[currentQuestion]?.type ===
                                  "files" ? (
                                    <div className="flex flex-col gap-2">
                                        <FileInput
                                            placeholder="Upload Files"
                                            icon={<IconUpload />}
                                            value={files}
                                            onChange={setFiles}
                                            multiple
                                            className="w-[50%]"
                                        ></FileInput>
                                        <Button
                                            className="place-self-end bg-gray-600 text-sm hover:border-black hover:bg-white hover:text-black"
                                            onClick={() => {
                                                setAnswers((answers) => [
                                                    ...answers,
                                                    { files: files },
                                                ])
                                                setCurrentQuestion(
                                                    (currentQuestion) =>
                                                        currentQuestion + 1
                                                )
                                            }}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                ) : questions[currentQuestion]?.type ===
                                  "input" ? (
                                    <div className="flex flex-col gap-2">
                                        <TextInput
                                            placeholder="XXX"
                                            size="md"
                                            icon={
                                                questions[currentQuestion]
                                                    ?.symbol === "money" ? (
                                                    <IconCurrencyDollar />
                                                ) : (
                                                    <IconHourglass />
                                                )
                                            }
                                            withAsterisk
                                            value={budget}
                                            onChange={(e) =>
                                                setBudget(e.target.value)
                                            }
                                        ></TextInput>
                                        <Button
                                            className="place-self-end bg-gray-600 text-sm hover:border-black hover:bg-white hover:text-black"
                                            onClick={() => {
                                                setAnswers((answers) => [
                                                    ...answers,
                                                    { budget: budget },
                                                ])
                                                setCurrentQuestion(
                                                    (currentQuestion) =>
                                                        currentQuestion + 1
                                                )
                                            }}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                ) : (
                                    questions[currentQuestion]?.a?.map(
                                        (v, i) => {
                                            return (
                                                <Button
                                                    key={i}
                                                    size="lg"
                                                    className="m-1 bg-gray-600 text-xl hover:border-black hover:bg-white hover:text-black"
                                                    onClick={() => {
                                                        setAnswers(
                                                            (answers) => [
                                                                ...answers,
                                                                {
                                                                    a: v,
                                                                },
                                                            ]
                                                        )
                                                        setCurrentQuestion(
                                                            (currentQuestion) =>
                                                                currentQuestion +
                                                                1
                                                        )
                                                    }}
                                                >
                                                    {v}
                                                </Button>
                                            )
                                        }
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Job
