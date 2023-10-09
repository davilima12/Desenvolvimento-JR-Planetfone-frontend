<template>
    <div class="content">
        <div class="navbar border-bottom">
            <h3 id="title">YouConverter</h3>
            <div class="nav">
                <nav class="navbar navbar-light">
                    <a class="btn btn-primary m-2" @click="musica">Baixar Música do YouTube</a>
                    <a class="btn btn-primary" @click="video">Baixar Vídeos do YouTube</a>
                </nav>

            </div>
        </div>
        <div class="loading" v-if="exibirSpnier">
            <div class="spinner">
                <div class="porcent">Loading</div>
            </div>
        </div>
        <div class="row" id="header">
            <div class="col" style="margin: auto;">
                <h2 class="mb-2 mt-3 text-center text-primary">Baixar {{ pagina }} do Youtube online</h2>
                <form @submit.prevent="fazerDownload" style="margin: auto;">
                    <div class="row">
                        <div class="col-lg-6 col-12 mb-3" id="pesquisar">
                            <input placeholder="Cole o link da url aqui" class="form-control" required type="text"
                                name="url" id="url" v-model="url">
                            <button class="btn btn-primary " id="download-button">Download</button>
                        </div>

                    </div>

                </form>
            </div>

        </div>
        <div class="tabela border-bottom mt-2">
            <div class="conteudo">
                <div class="row border" v-if="exibirIframe">
                    <h3 class="text-center text-primary mt-3">{{ titulo }}</h3>
                    <div class="col mt-2 text-center">
                        <p> <strong> Para baixar o arquivo, clique nos 3 pontos <br> no canto
                                inferior
                                direito da tela<br> E escolha 'fazer download' na lista de opções.</strong></p>
                        <iframe :src="linkDownload" :name="titulo"></iframe>
                    </div>
                </div>

                <div class="row mt-5 border-bottom">
                    <div class="col">
                        <h2 class="text-primary">Melhor Downloader de MP3 e MP4 do Youtube {{ anoAtual }}</h2>
                        <p>"Youtube to Mp3" é uma ferramenta para baixar mp3 do Youtube. Suporte ao conversor de alta
                            qualidade do Youtube para mp3, baixe músicas do Youtube em alta velocidade. Além disso,
                            também permite que você baixe vídeos do Youtube e converta vídeos do Youtube
                        </p>
                    </div>
                </div>

                <div class="ftco-section section-left">
                    <section itemscope="">
                        <div class="sf_container">
                            <div class="wrapper">
                                <div class="mt-2">
                                    <h3 class="title center text-primary">YouConverter</h3>
                                    <div class="border-bottom">
                                        <div class="faq_item_title">
                                            <h4 itemprop="name">O que é YouConverter?</h4>
                                        </div>
                                        <div>
                                            <div>
                                                <ul>
                                                    <li>É uma ferramenta gratuita para baixar vídeos do Youtube online.
                                                        Também suporta converter vídeos do <b>Youtube para Mp3</b> e
                                                        <b>baixar músicas do Youtube</b> com a melhor qualidade
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-bottom mt-2">
                                        <div class="text-primary">
                                            <h4>Como baixar o vídeo do YouTube no YouConverter mais
                                                rápido?</h4>
                                        </div>
                                        <div class="mb-2">
                                            <div>
                                                <ul>
                                                    <li>Etapa 1: cole o URL do Youtube na caixa de pesquisa</li>
                                                    <li>Etapa 2: Escolha o formato MP4 ou MP3 e clique em "Get Link"
                                                    </li>
                                                    <li>Etapa 3: aguarde alguns segundos pela ferramenta de
                                                        processamento de vídeo e pressione o botão "Download"</li>
                                                    <li>Também pode usar o utilitário "downloader youtube" do YouConverter
                                                        para baixar o vídeo mais rápido</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-bottom mt-2">
                                        <div class="text-primary">
                                            <h4>O YouConverter tem um número limitado de usos?</h4>
                                        </div>
                                        <div class="mb-2">
                                            <div> Nossa ferramenta permite que você baixe vídeos ilimitados do Youtube
                                                e tudo de graça. </div>
                                        </div>
                                    </div>
                                    <div class="border-bottom mt-2">
                                        <div class="text-primary">
                                            <h4>Para quais formatos o YouConverter permite a conversão de
                                                vídeos do Youtube?</h4>
                                        </div>
                                        <div class="mb-2">
                                            <div> Oferecemos suporte para conversão em
                                                uma variedade de formatos como: MP4, 3GP, MP3, WEBM, M4A. Você pode
                                                assisti-lo diretamente no dispositivo sem baixar nenhum software
                                                adicional. </div>
                                        </div>
                                    </div>
                                    <div class="border-bottom mt-2">
                                        <div class="text-primary">
                                            <h4>O YouConverter pode converter vídeos do Youtube em
                                                mp3?</h4>
                                        </div>
                                        <div class="mb-2">
                                            <div> Claro que você pode
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-bottom mt-2">
                                        <div class="text-primary">
                                            <h4>A ferramenta YouConverter pode baixar vídeos do Youtube em
                                                telefones celulares?</h4>
                                        </div>
                                        <div class="mb-2">
                                            <div> A tecnologia de download de vídeo do Youtube da
                                                YouConverter funciona bem em todos os dispositivos, como PCs,
                                                smartphones e tablets. O método funciona de forma semelhante a , y2meta,
                                                x2convert sem a necessidade de
                                                instalar qualquer outro software. </div>
                                        </div>
                                    </div>
                                    <div class="border-bottom mt-2">
                                        <div class="text-primary">
                                            <h4>Onde o vídeo baixado do Youtube é armazenado?</h4>
                                        </div>
                                        <div class="mb-2">
                                            <div> Verifique a pasta "Downloads" no telefone ou a seção
                                                "histórico de downloads" do navegador. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
            url: "",
            linkDownload: "",
            titulo: "",
            exibirIframe: false,
            anoAtual: '',
            exibirSpnier: false,
            pagina: 'Musica',
            novaUrl: 'http://127.0.0.1:5000/musica?url='
        }
    },
    mounted() {
        this.pegarAnoAtual()
    },
    methods: {
        musica() {
            this.novaUrl = 'http://127.0.0.1:5000/musica?url='
            this.pagina = 'Musica'
        },
        video() {
            this.novaUrl = 'http://127.0.0.1:5000?url='
            this.pagina = 'Video'
        },
        pegarAnoAtual() {
            const dataAtual = new Date();
            const anoAtual = dataAtual.getFullYear();
            this.anoAtual = anoAtual
        },
        async fazerDownload() {
            try {
                this.exibirSpnier = true
                const response = await axios.get(`${this.novaUrl}${this.url}`)
                this.exibirSpnier = false
                this.exibirIframe = true
                this.titulo = response.data._monostate.title
                this.linkDownload = response.data.url
            } catch (error) {
                this.exibirSpnier = false
                this.$swal("Erro", 'Não foi possivel encontrar essa musica', 'error')
            }
        },
    }
}
</script>



<style src="./style.css" scoped />