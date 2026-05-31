import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface NFTItem {
  id: string
  name: string
  description: string
  image: string
  price: string
  tokenId: string
  contractAddress: string
  owner: string
  createdAt: string
}

export const useNFTStore = defineStore('nft', () => {
  const nftList = ref<NFTItem[]>([])
  const loading = ref(false)
  const currentPage = ref(1)
  const hasMore = ref(true)

  const setNFTList = (list: NFTItem[]) => {
    nftList.value = list
  }

  const appendNFTList = (list: NFTItem[]) => {
    nftList.value = [...nftList.value, ...list]
  }

  const setLoading = (status: boolean) => {
    loading.value = status
  }

  const setCurrentPage = (page: number) => {
    currentPage.value = page
  }

  const setHasMore = (status: boolean) => {
    hasMore.value = status
  }

  const getNFTById = (id: string) => {
    return nftList.value.find((nft) => nft.id === id)
  }

  const clearNFTList = () => {
    nftList.value = []
    currentPage.value = 1
    hasMore.value = true
  }

  return {
    nftList,
    loading,
    currentPage,
    hasMore,
    setNFTList,
    appendNFTList,
    setLoading,
    setCurrentPage,
    setHasMore,
    getNFTById,
    clearNFTList
  }
})
