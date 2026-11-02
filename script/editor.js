import Editorjs from "@editorjs/editorjs"
import Header from "@editorjs/header"
import ImageTool from "@editorjs/image"
import List from "@editorjs/list"
import Quote from "@editorjs/quote"

export const editor = new Editorjs({
    holder: "editor",

    tools: {
        header: {
            class: Header,
            config: {
                placeholder: "Subtítulo",
                levels: [2, 3],
                defaultLevel: 2
            }
        },
        image: {
            class: ImageTool,
            config: {
                captionPlaceholder: "Legenda da imagem",
                uploader: {
                    uploadByFile(file) {
                        return Promise.resolve({
                            success: 1,
                            file: {
                                url: URL.createObjectURL(file)
                            }
                        })
                    }
                }
            }
        },
        list: List,
        quote: Quote
    },

    i18n: {
        messages: {
            tools: {
                header: {
                    "Heading 2": "Subtítulo 2",
                    "Heading 3": "Subtítulo 3"
                },

                image: {
                    "Caption": "Legenda",
                    "Select an Image": "Selecionar imagem",
                    "With border": "Com borda",
                    "Stretch image": "Expandir imagem",
                    "With background": "Com fundo",
                    "Delete": "Deletar",
                    "Click to delete": "Clique para deletar"
                },

                list: {
                    "Ordered": "Lista numerada",
                    "Unordered": "Lista com marcadores"
                },

                quote: {
                    "Quote": "Citação",
                    "Caption": "Autor da citação"
                }
            },

            toolNames: {
                "Text": "Texto",
                "Heading": "Subtítulo",
                "Image": "Imagem",
                "List": "Lista",
                "Quote": "Citação"
            },

            ui: {
                toolbar: {
                    toolbox: {
                        Add: "Adicionar"
                    }
                },

                blockTunes: {
                    toggler: {
                        "Click to tune": "Clique para configurar"
                    }
                },

                inlineToolbar: {
                    converter: {
                        "Convert to": "Converter para"
                    }
                }
            }
        }
    },

    placeholder: "Comece a escrever sua noticia"
})