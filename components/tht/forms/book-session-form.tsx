"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const healthList = [
  {
    id: "health-talk",
    label: "Health talk",
  },
  {
    id: "health-talk-screening",
    label: "Health talk & screening",
  },
  {
    id: "health-screening-only",
    label: "Health screening only",
  },
] as const

const screeningList = [
  {
    id: "blood-pressure",
    label: "Blood pressure",
  },
  {
    id: "blood-sugar",
    label: "Blood sugar",
  },
  {
    id: "cholesterol",
    label: "Cholesterol",
  },
  {
    id: "bmi",
    label: "BMI",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "height",
    label: "Height",
  },
  {
    id: "weight",
    label: "Weight",
  },
] as const

const FormSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email().min(1),
  telephone: z.string().min(11).max(11),
  organization: z.string().min(1),
  healthTopic: z.string().min(1),
  location: z.string().min(1),
  proposedDate: z.string().min(1),
  health: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  screening: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export function BookSessionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      health: [],
      screening: [],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="space-y-1.5 w-full">
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Full name"
                  className="no-focus text-base light-border-2 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full">
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full">
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="080XXXXXXXX"
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem className="space-y-1.5 w-full">
              <FormLabel>Organisation</FormLabel>
              <FormControl>
                <Input
                  placeholder="Organisation"
                  className="no-focus text-base light-border-2 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="my-4 text-sm">Basic preventive health check required (tick as appropriate)</p>
        <FormField
          control={form.control}
          name="health"
          render={() => (
            <FormItem>
              <div className="flex flex-wrap gap-4">
                {healthList.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="health"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox className="w-6 h-6"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([ ...field.value, item.id ])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="healthTopic"
          render={({ field }) => (
            <FormItem className="space-y-1.5 w-full">
              <FormLabel>Health topic required</FormLabel>
              <FormControl>
                <Input
                  placeholder="Preferred health topic"
                  className="no-focus text-base light-border-2 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="my-4 text-sm">Screening required (tick as appropriate)</p>
        <FormField
          control={form.control}
          name="screening"
          render={() => (
            <FormItem>
              <div className="flex flex-wrap gap-4">
                {screeningList.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="screening"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox className="w-6 h-6"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([ ...field.value, item.id ])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-6">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full">
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Location"
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proposedDate"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full">
                <FormLabel>Proposed date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="no-focus text-base light-border-2 min-h-[56px] border w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" size="lg">Submit</Button>
      </form>
    </Form>
  )
}