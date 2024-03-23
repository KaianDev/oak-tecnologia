import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { v4 as uuid } from "uuid"
import { withMask } from "use-mask-input"

// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

// Utilities
import { AvailableToSale, Product } from "@/types/product"
import { useProducts } from "@/contexts/product.context"

const addProductSchema = z.object({
  name: z
    .string({ required_error: "O campo é obrigatório" })
    .min(2, "O nome produto deve ter pelo menos 2 caracteres")
    .trim(),
  description: z
    .string({ required_error: "O campo é obrigatório" })
    .min(2, "O nome produto deve ter pelo menos 2 caracteres")
    .trim(),
  value: z.string({ required_error: "O campo é obrigatório" }),
  availableToSale: z.nativeEnum(AvailableToSale),
})

type AddProductSchema = z.infer<typeof addProductSchema>

export const AddProductForm = () => {
  const [open, setOpen] = useState(false)

  const form = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
  })

  const { addProduct } = useProducts()

  const handleAddProductSubmit = (data: AddProductSchema) => {
    const priceValue = Number.parseFloat(
      data.value.replaceAll(".", "").replace(",", "."),
    )
    if (isNaN(priceValue)) {
      form.setError("value", {
        type: "manual",
        message: "Insira um valor",
      })
      return
    }
    if (priceValue < 0) {
      form.setError("value", {
        type: "nonPositiveValue",
        message: "Insira um valor válido",
      })
      return
    }
    if (priceValue === 0) {
      form.setError("value", {
        type: "zeroValue",
        message: "Insira um valor válido",
      })
      return
    }

    const product: Product = {
      ...data,
      value: priceValue,
      id: uuid(),
    }
    addProduct(product)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => form.reset()}>Adicionar novo Produto</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Formulário de Cadastro de Produto</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleAddProductSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o nome do produto" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite a descrição do produto"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite o valor do produto"
                      type="text"
                      ref={withMask(
                        [
                          "9,99",
                          "99,99",
                          "999,99",
                          "9.999,99",
                          "99.999,99",
                          "999.999,99",
                        ],
                        {
                          placeholder: "",
                          showMaskOnHover: false,
                        },
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availableToSale"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disponível para venda</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      defaultChecked
                    >
                      <FormItem className="flex items-center justify-start gap-4 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={AvailableToSale.YES} />
                        </FormControl>
                        <FormLabel className="font-normal">Sim</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center justify-start gap-4 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={AvailableToSale.NO} />
                        </FormControl>
                        <FormLabel className="font-normal">Não</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="space-x-4">
              <Button type="submit">Cadastrar</Button>

              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
